var express = require('express');
const jwt = require('jsonwebtoken');
const router = require('express').Router();
router.use(express.json());


const Task = require('./../models/task');
const verifyToken = require('./../utils/jwtFunctions');
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

router.post('/taskinfo', async (req,res)=>{

    const taskifexist = await Task.findOne({ tittle: req.body.tittle });
    
   verifyToken(req,res);

   (taskifexist)
        ? res.status(200).json(taskifexist)
        : res.status(404).json({error : 'Task not found'})
   
})

//crear una tarea
router.post('/newtask', async (req, res)=>{
   
    const taskifexist = await Task.findOne({ tittle: req.body.tittle });
    
    var task = {tittle : req.body.tittle, description : req.body.description, userId : req.body.userId}

    // verify if the user who is attampting to create a new task is already registered in the database
    verifyToken(req,res)
    

    if (taskifexist) {
        res.status(404).send('La tarea ya esta registrada')
    } else {
        const newTask = await Task.create(task)
        res.status(200).json(newTask);
    }

})

//eliminar una tarea
router.delete('/deletetask', async (req, res) =>{

    const taskifexist = await Task.findOne({ tittle: req.body.tittle });
    
    // verify if the user who is attampting to create a new task is already registered in the database
    verifyToken(req,res)

    if (taskifexist) {
        if (taskifexist.userId === req.body.userId) {

            await Task.findByIdAndDelete(taskifexist.id)
            res.status(200).send('Task deleted')

        } else{res.status(401).json('You can only delete your tasks')}

    } else {res.status(401).json('Task doasent exist')}
})



//modificar la descripcion de una tarea especifica

router.post('/updatetask', async (req, res ) =>{

   
    //find task for update
    const tasktoupdate = await Task.findOne({ tittle: req.body.tittle });


    // verify if the user who is attampting to create a new task is already registered in the database
    verifyToken(req,res)

    //if exists update
    if (tasktoupdate) {
        if (tasktoupdate.userId === req.body.userId) {

            await Task.findByIdAndUpdate({ _id : tasktoupdate.id}, { description : req.body.description});
            // const taskupdated = await Task.findOne({ tittle: req.body.tittle }); 
            res.status(200).json('Tarea modificada con exito');
            
        } else{res.status(401).json('You can only update your tasks')}
    }
    res.status(401).json('Task doasent exist');
})


//mostrar la informacion de una tarea ya sea buscando mediante la descripccion o el titulo
router.post('/gettask', async ()=>{


})

module.exports = router;



