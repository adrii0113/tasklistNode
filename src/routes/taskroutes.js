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

//crear una tarea
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

//eliminar una tarea
router.delete('/deletetask', async (req, res) =>{

    const taskifexist = await Task.findOne({ tittle: req.body.tittle });
   
    if (taskifexist) {
        await Task.findByIdAndDelete(taskifexist.id)
        res.status(200).send('Tarea eliminada con exito')
    } else {res.status(500).json('La tarea no existe en la base de datos')}
})



//modificar la descripcion de una tarea especifica

router.post('/updatetask', async (req, res ) =>{

   

    //find task for update
    const tasktoupdate = await Task.findOne({ tittle: req.body.tittle });

    //if exists update
    if (tasktoupdate) {
        await Task.findByIdAndUpdate({ _id : tasktoupdate.id}, { description : req.body.description});
        // const taskupdated = await Task.findOne({ tittle: req.body.tittle }); 
        res.status(200).json('Tarea modificada con exito');
    }
    res.status(500).json('La tarea no existe en la base de datos');
})


//mostrar la informacion de una tarea ya sea buscando mediante la descripccion o el titulo

module.exports = router;



