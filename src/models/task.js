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
   
    completada: {
        type:Boolean,
        default: false
    }
    
   
},
// con este campo automatizamos la fecha de creacion del ususario 
{timestamps:true}
)



// exportamos el esquema
module.exports = mongooseClient.model("Task", TaskSchema);