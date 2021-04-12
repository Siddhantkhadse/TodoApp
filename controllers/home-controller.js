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
   

    let description=req.query.id;
    console.log(description);

//Deleting the task
    Tasks.findOneAndDelete({description: description},function(err){

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
