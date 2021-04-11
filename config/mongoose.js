// require the library
const mongoose=require('mongoose');

//connect to the database
mongoose.connect('mongodb://localhost/TodoListApp');

//acquire the connection (to check if it is successful)
const db=mongoose.connection;
 
//error
db.on('error',console.error.bind(console,'error conecting to server'));

//up and running print the message
db.once('open',function(){
    console.log('Successfully connected to the database');
})