// Express
var express = require('express');

// JWT
const jwt = require('jsonwebtoken');
const verifyToken = require('./../utils/jwtFunctions');

// Bcrypt
const bcrypt = require('bcrypt');

// ROUTER
const router = require('express').Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Model
const User = require('./../models/User');


// a user can change her password if he is already in the session

router.post('/change-password', async (req, res) =>{

    const user = await User.findOne({ userName: req.body.userName});

    // verify if the user who is attampting to update his password is already  in the database
    verifyToken(req,res);

    // if exists update
    if (user) 
        {
            if(user.email === req.body.email){
            
            const validPassword = await bcrypt.compare(req.body.oldPassword,user.password );
            console.log(validPassword)
                if (!validPassword) {
                    res.status(401).json('Password does not match');
                } else{

                    // if user is correct encrypt the new password
                    const encrypt = await bcrypt.genSalt(10);
                    const hashedPassword = await bcrypt.hash(req.body.password, encrypt);
        
                    await User.findByIdAndUpdate({_id : user.id},{ password: hashedPassword})
                    res.status(200).json('Password has been updated');
                }

        } else {res.status(401).json('You can only update your password')}
    } else {
        res.status(401).json('Task doasent exist');
    }

})


router.post('/updateuser', async (req,res) =>{

    const user = await User.findOne({email: req.body.email});
    

})



module.exports = router;