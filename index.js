const express= require('express');
const app=express();
const port=7000;
var bodyParser = require('body-parser')
const db= require('./config/mongoose');


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assests'));
app.use(express.urlencoded());
app.use('/', require('./routes'));
app.use(bodyParser.urlencoded({ extended: false }))

const model= require('./models/todos');

const router = require('./routes');
const routerNext=require('./routes/users');
const routreNew=require('./routes/posts');
const addition=require('./routes/addTask');
const deletion= require('./routes/deleteTask');

var TaskList=[
    {
        Description: "Todo app",
        Category: "Coding",
        Date: 13/03/2022
    }
];


app.listen(port, function(err){
    if(err){
        console.log('ERROR: ', err);
    }
    else
    console.log(`The server is running successfully on port: ${port}`);    
})