const { response } = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('./../models/User');
const verifyToken = require('./../utils/jwtFunctions');

const changePassword = async (req, res = response) => {

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


}

const updateUser = async (req, res = response) => {

    const user = await User.findOne({email: req.body.email});

}


module.exports = {

    changePassword,
    updateUser
}