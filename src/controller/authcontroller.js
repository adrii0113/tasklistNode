const {response } = require('express');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./../models/User');

const registerUser = async  (req, res = response) => {

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

}


const loginUser = async (req, res = response) => {

    const userEmail = await User.findOne({email: req.body.email});
    

    if (!userEmail) {
        res.status(500).json('We dont find any user with that email');
    } else {
        
        if (userEmail.email === req.body.email ) {
            const validPassword = await bcrypt.compare(req.body.password, userEmail.password);
            if (!validPassword){
                res.status(401).json('Inicio de sesion incorrecto')
            } else {

                const userForToken = {
                    id: userEmail._id,
                    username: userEmail.userName
                }

                const token = jwt.sign(userForToken, process.env.SECRET);
                res.send({
                    email: userEmail.email,
                    userName: userEmail.userName,
                    token
                })
                // res.status(200).json(userEmail);
            }
        } else {
            res.status(404).json('Credentials dasent match');
        }
    }

}

module.exports ={
    registerUser,
    loginUser
}