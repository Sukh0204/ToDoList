const express= require('express');
const app=express();
const port=7000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('./assests'));

app.use('/', require('./routes'));

const router = require('./routes');
const routerNext=require('./routes/users');
const routreNew=require('./routes/posts');


app.listen(port, function(err){
    if(err){
        console.log('ERROR: ', err);
    }
    else
    console.log(`The server is running successfully on port: ${port}`);    
})