const mongoose=require('mongoose');
const TaskSchema=new mongoose.Schema({

date:{
    type:String,
    required:true
},
category:{
    type:String,
    required:true
},
description:{
    type:String,
    required:true


}

});
const Tasks=mongoose.model('Tasks',TaskSchema);
module.exports=Tasks;