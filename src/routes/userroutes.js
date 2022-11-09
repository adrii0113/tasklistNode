// Express
var express = require('express');


// ROUTER
const router = require('express').Router();
router.use(express.json());
router.use(express.urlencoded({ extended: true }));


const { changePassword, updateUser } = require('./../controller/usercontroller');


router.post('/change-password',changePassword);

router.post('/updateuser', updateUser);



module.exports = router;