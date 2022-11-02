var express = require('express');
const router = require('express').Router();
router.use(express.json());

// encript password
const bcrypt = require('bcrypt');
const saltRounds = 10;

// end encript requirements


const User = require('./../models/User');

// register new user 


router.post('/register', async (req,res) =>{


    const email = await User.findOne({ email: req.body.email });
    const userName = await User.findOne({ userName: req.body.userName });
    const phone = await User.findOne({ phone: req.body.phone });

    if(!email || !userName || !phone){
        function hashing(){
            let hashedPassword = '';
            bcrypt.hash(req.body.password, saltRounds, (err, hash) =>{
                hashedPassword = hash;
                // console.log(hashedPassword);
            })
            return hashedPassword;
        }

        console.log(hashing().length)
     
        const newUser = {
            userName : req.body.userName,
            fullName : req.body.fullName,
            email : req.body.email,
            password : req.body.password,
            profilePic : req.body.profilePic,
            phone : req.body.phone
        }
        const usercreated = User.create(newUser);
        res.status(200).json(usercreated);
    } else {

        res.status(404).json('El usuario que intentas crear ya existe')
    }
})


router.post('/login', async(req,res) =>{

    const userEmail = await User.findOne({email: req.body.email});
    
    // const userPassword = await User.findOne({email: req.body.password});

    if (!userEmail) {
        res.status(500).json('We dont find any user with that email');
    } else {
        
        if (userEmail.email === req.body.email && userEmail.password === req.body.password) {
            res.status(200).json(userEmail);
        } else {
            res.status(404).json('Credentials dasent match');
        }
    }

    
})






module.exports = router;