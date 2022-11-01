var express = require('express');
const router = require('express').Router();
router.use(express.json());

const User = require('./../models/User');

// register new user 


router.post('/register', async (req,res) =>{


    const email = await User.findOne({ email: req.body.email });
    const userName = await User.findOne({ userName: req.body.userName });
    const phone = await User.findOne({ phone: req.body.phone });

    if(!email || !userName || !phone){
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


router.post('/login', (req, res) =>{

    
})






module.exports = router;