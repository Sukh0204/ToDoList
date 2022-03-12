const express= require('express');
const app=express();
const port=7000;

app.use('/', require('./routes'));

const router = require('./routes');
const routerNext=require('./routes/users');


app.listen(port, function(err){
    if(err){
        console.log('ERROR: ', err);
    }
    else
    console.log(`The server is running successfully on port: ${port}`);    
})