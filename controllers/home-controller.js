
 const Tasks=require('../models/tasks');

 module.exports.create=function(req, res){
   

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
module.exports.delete=function(req, res){
   

    let description=req.query.id;
    console.log(description);
    Tasks.findOneAndDelete({description: description},function(err){

        if(err){
        console.log('error',err);
        return;
        }
return res.redirect('back');

   });
  

}

module.exports.home= function(req, res){

    Tasks.find({},function(err,tasks){
 if(err){
     console.log('Error from DB');
     return;
 }
  
     return res.render('home',{
         title: "Todo App",
         task_list: tasks
     });
 
    });
};
