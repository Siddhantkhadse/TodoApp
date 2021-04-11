const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home-controller');
console.log('router loaded');

router.get('/',homeController.home);

router.use('/users',require('./users'));

router.post('/create-task',homeController.create);
router.get('/delete-task',homeController.delete);

//for any further routes,access from here
//router.use('/routerName',require('./routerfile'))

 

module.exports=router;
 