//express server
const express=require('express');
const router=express.Router();

//getting all the functions from homecontroller
const homeController=require('../controllers/home-controller');
console.log('router loaded');

//homepage get request
router.get('/',homeController.home);

//post request for creating tasks
router.post('/create-task',homeController.create);

//get request for deleting tasks
router.get('/deleteTask/:id',homeController.delete);

//delete a list of task
router.post('/delete',homeController.delete_list);

//exporting data
module.exports=router;
 
//passing the final data to homecontroller