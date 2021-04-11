const { urlencoded } = require('express');
const express=require('express');
const app=express();
const port=8000;

const mongoose = require('./config/mongoose');

app.use(urlencoded());

//use express JS router

app.use('/',require('./routes/index'));




//setup view engine
app.set('view engine','ejs');
app.set('views','./views');

app.listen(port,function(err){

if(err){
    console.log(`Error in running the server: ${err}`);
}
 
console.log(`Server is running on port: ${port}`);
 
}); 