const mongoose = require('mongoose');
const chatschema=new mongoose.Schema({
    message:{
        type:String,
        required:true
    },
    to:{
        type:String,
        required:true
    },
    from:{
        type:String,
        required:true
    },
    date:{
        type:Date
    }
});

module.exports=chatschema;