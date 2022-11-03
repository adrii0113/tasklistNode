const mongooseClient = require('mongoose');


const TaskSchema = new mongooseClient.Schema({
    tittle:{
        type : String,
        required : true,
        min: 3,
        max: 30,
        unique : true
    },
    description:{
        type : String,
        required : true,
        min: 1,
        max: 50
    },
    userId:{
        type : String,
        required : true,
        unique : true
    },
   
    completed: {
        type:Boolean,
        default: false
    }
    
   
},
// con este campo automatizamos la fecha de creacion del ususario 
{timestamps:true}
)



// exportamos el esquema
module.exports = mongooseClient.model("Task", TaskSchema);