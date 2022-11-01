
const express = require("express");
const app = express();

//middleware
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
//bbdd
const mongooseClient = require('mongoose');

const taskroutes = require('./routes/taskroutes')
const authroutes = require('./routes/authroutes')
const userroutes = require('./routes/userroutes')
dotenv.config();
//bbdd connection
mongooseClient.connect(process.env.MONGO_URL, {useNewUrlParser: true},()=>{
    // Mensaje de confirmacion de conexion
    try {
        console.log('Conectado a bbdd')
    // Mensaje de error
    } catch (error) {
        console.error(error);
    }
})

app.use('/api/tasks', taskroutes)
app.use('/api/auth', authroutes)
// app.use('/api/user', userroutes)




app.listen(3000, ()=>{
    console.log("App lister on port 3000")
})
