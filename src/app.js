
const express = require("express");
const app = express();

//middleware
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv');
var cors = require('cors')
//bbdd
const mongooseClient = require('mongoose');
// cors config
const config = {
    application: {
        cors: {
            server: [
                {
                    origin: "*", //servidor que deseas que consuma o (*) en caso que sea acceso libre
                    credentials: true
                }
            ]
        }
}}
const Task = require('./models/task');
const taskroutes = require('./routes/taskroutes')
const authroutes = require('./routes/authroutes')
const userroutes = require('./routes/userroutes')

app.use(cors(
    config.application.cors.server
  ));
dotenv.config();
//bbdd connection
const {MONGO_URL, MONGO_URL_TEST, NODE_ENV} = process.env;
const connectionString = NODE_ENV === 'test'
    ? MONGO_URL_TEST
    : MONGO_URL


mongooseClient.connect(connectionString, {useNewUrlParser: true},()=>{
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
app.use('/api/user', userroutes);


app.listen(3000, ()=>{
    console.log("App lister on port 3000")
})

