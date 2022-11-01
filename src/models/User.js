const mongooseClient = require('mongoose');

const UserSchema = new mongooseClient.Schema({

    userName:{
        type : String,
        required : true,
        min: 5,
        max: 15,
        unique : true
    },

    fullName:{
        type : String,
        required : true,
        min: 12,
        max: 30,
    },
    email:{
        type : String,
        required : true,
        // validate: [ isEmail, 'El correo electronico no cumple el form' ],
        unique : true
    },
    password:{
        type : String,
        required : true
    },

    profilePic: {
        type: String,
        default: ''
    },
    // en el array se almacenaran los ids de los seguidores de cada usuario
    
    phone: {
        type: String,
        required: true,
        unique: true
    },
    // con este campo comprobamos si el usuario es administrador de la aplicacion
    admin: {
        type:Boolean,
        default: false
    }
    
   
},
// con este campo automatizamos la fecha de creacion del ususario 
{timestamps:true}
)

module.exports = mongooseClient.model("User", UserSchema);