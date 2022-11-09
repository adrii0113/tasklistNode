var express = require('express');
const router = require('express').Router();
router.use(express.json());

// controllers
const { registerUser } = require('./../controller/authcontroller');
const { loginUser } = require('./../controller/authcontroller');



// register new user route that call the controller method
router.post('/register', registerUser);

//login user route that call the controller method
router.post('/login', loginUser);



module.exports = router;