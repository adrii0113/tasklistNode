var express = require('express');
const router = require('express').Router();
router.use(express.json());
const jsonfile = require('jsonfile')
const json = require('./../db/tasks.json')

jsonfile.readFile(json)
  .then(obj => console.dir(obj))
  .catch(error => console.error(error))

router.use(express.urlencoded({ extended: true }));
router.get('/gettasks', (req, res)=>{
    

    res.status(200).json(json)
    
});


router.post('/newtask',(req, res)=>{

    
    (req.body.userId === json.task.userId)
    ? console.log("Este id ya esta repetido")

    : console.log("OK")
        
    
    
    var task = {
        userId : req.body.userId,
        tittle : req.body.tittle,
        description : req.body.description
    }
    
    res.status(200).json(task);
    

})


module.exports = router;



