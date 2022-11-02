var express = require('express');
const router = require('express').Router();
router.use(express.json());

// encript password
const bcrypt = require('bcrypt');
// const saltRounds = 10;

// end encript requirements


const User = require('./../models/User');

// register new user 


router.post('/register', async (req,res) =>{


    const email = await User.findOne({ email: req.body.email });
    const userName = await User.findOne({ userName: req.body.userName });
    const phone = await User.findOne({ phone: req.body.phone });

    if(!email || !userName || !phone){
       
        const encrypt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, encrypt);

        const newUser = new User({
            userName : req.body.userName,
            fullName : req.body.fullName,
            email : req.body.email,
            password : hashedPassword,
            profilePic : req.body.profilePic,
            phone : req.body.phone
        });
        const usercreated = await newUser.save();
        res.status(200).json(usercreated);
    } else {

        res.status(404).json('El usuario que intentas crear ya existe')
    }
})


router.post('/login', async(req,res) =>{

    const userEmail = await User.findOne({email: req.body.email});
    

    if (!userEmail) {
        res.status(500).json('We dont find any user with that email');
    } else {
        
        if (userEmail.email === req.body.email ) {
            const validPassword = await bcrypt.compare(req.body.password, userEmail.password);
            if (!validPassword){
                res.status(500).json('Inicio de sesion incorrecto')
            } else {

                res.status(200).json(userEmail);
            }
        } else {
            res.status(404).json('Credentials dasent match');
        }
    }

    
})


module.exports = router;