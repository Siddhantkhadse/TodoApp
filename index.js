const { urlencoded } = require('express');
const express=require('express');
const app=express();
const port=8000;

//using mongodb
const mongoose = require('./config/mongoose');



//encode the data fetched from user
app.use(urlencoded());

//accesing our assets such as css file and images from assets folder
app.use(express.static('./assets'));

//setup our view engine
app.set('view engine','ejs');
app.set('views','./views');


//it fetches all the requests and send it to the route folder
app.use('/',require('./routes/index'));


//server request condition
app.listen(port,function(err){

if(err){
    console.log(`Error in running the server: ${err}`);
}
 
console.log(`Server is running on port: ${port}`);
 
}); 