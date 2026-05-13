const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({    
    title : {
        type : String,
        required : true 
    },
    details : {
        type : String,      
    },
    timestamps : {
        type : Date,
        default : Date.now
    },
    completed : {
        type : Boolean,
        default : false 
    },

}, {timestamps : true});

const TodoModel = mongoose.model('Todo', todoSchema); 
module.exports = TodoModel;   

