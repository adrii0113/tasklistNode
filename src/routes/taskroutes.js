var express = require('express');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
router.use(express.json());


const Task = require('./../models/task');
const verifyToken = require('./../utils/jwtFunctions');
router.use(express.urlencoded({ extended: true }));

const { getAllTasks, getTaskInfo, createNewTask, deleteTask, updateTask} = require('./../controller/taskcontroller')



router.post('/gettasks', getAllTasks)

router.post('/taskinfo', getTaskInfo)

router.post('/newtask', createNewTask)

router.delete('/deletetask', deleteTask);

router.post('/updatetask', updateTask);


module.exports = router;



