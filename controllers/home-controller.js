//fetching our data from models folder through tasks.js
 const Tasks=require('../models/tasks');

//Create function
 module.exports.create=function(req, res){
   
//Adding information to our data base
    Tasks.create({
        description:req.body.description,
        date:req.body.date,
        category:req.body.category
    },function(err,newTask){
        if(err){
            console.log('Error in creating the contact',err);
            return;
        }
        console.log('****',newTask);
        return res.redirect('back');
    });

  

}

//Delete function
module.exports.delete=function(req, res){
    console.log(req.params);
    let description=req.params.id;

//Deleting the task
    Tasks.findByIdAndDelete(description,function(err){

        if(err){
        console.log('error',err);
        return;
        }
return res.redirect('back');

   });
  
}

//Returning Home Page
module.exports.home= function(req, res){

    Tasks.find({},function(err,tasks){
 if(err){
     console.log('Error from DB');
     return;
 }

//passing the all the tasks through task_list variable
     return res.render('home',{
         title: "Todo App",
         task_list: tasks
     });
 
    });
};

//delete a list of tasks
module.exports.delete_list=function(req,res){
   let list=req.body.task;
   console.log(typeof(list));
   if(typeof(list)=='object'){
       console.log("working");
       for(let i of list){
           Tasks.findByIdAndDelete(i,function(err){
               if(err){
               console.log("error in deleting",err);
               return;
               }
               console.log("deleted");
           });
       }
   }
   else{
       Tasks.findByIdAndDelete(list,function(err){
           if(err){
               console.log("error in deleting",err);
               return;
           }
       });
   }
   return res.redirect("/");
}