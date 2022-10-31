
const express = require("express");
const app = express();

const helmet = require('helmet');
const morgan = require('morgan');

const taskroutes = require('./routes/taskroutes')



app.use('/api/tasks', taskroutes)





app.listen(3000, ()=>{
    console.log("App lister on port 3000")
})
