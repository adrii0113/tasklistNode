var express = require('express');
const router = require('express').Router();
router.use(express.json());


const jsonfile = require('jsonfile')
const json = require('./../db/tasks.json')


const Task = require('./../models/task');



router.use(express.urlencoded({ extended: true }));

//conseguir todas las tareas registradas
router.get('/gettasks', async (req, res)=>{
    
    try {
        const task = await Task.find();
        res.status(200).json(task)
    } catch (error) {
        return res.status(500).json(err);
    }
    
});


//obetner una tarea en especifico en funcion de su titulo

router.post('/task:tittle', async (req,res)=>{

    if (req.params.tittle === req.b) {
        
    }
})


router.post('/newtask', async (req, res)=>{

    const taskifexist = await Task.findOne({ tittle: req.body.tittle });
    // console.log(req.params.tittle)
    var task = {tittle : req.body.tittle, description : req.body.description}

    if (taskifexist) {
        res.status(404).send('La tarea ya esta registrada')
    } else {
        const newTask = await Task.create(task)
        res.status(200).json(newTask);
    }
    
    

})


module.exports = router;



