const mongoose  = require('mongoose');

const UserSchema = mongoose.Schema({
    username : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    email : {
        type : String,
        unique : true,
        trim : true ,
        lowercase : true,
        required : true,
    },
    setRole : {
        type : String,
        enum : ['User' , 'Admin'],
        default : 'User'
    },
    password : {
        required : true,
        type : String
    }
} , {tiemstamps : true});

modeule.exports = mongoose.model('userSchema' ,UserSchema);
