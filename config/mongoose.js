const mongoose= require('mongoose');
mongoose.connect('mongodb://localhost/ToDoListDB');
const db=mongoose.connection;
db.on('error', console.error.bind(console, 'error connecting to mongoose'));
db.once('open', function(){
    console.log('SucessFully connected to Mongoose!');
})
module.exports=db;
