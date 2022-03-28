const model= require('../models/todos');
module.exports.home=function(req, res){

    model.find({}, function(err, tasks){
        if(err){
            console.log('Error in fetching tasks');
            return ;
        }
      
       
        return res.render('home', {
            title:"home",
            task_list: tasks
        });
    })
    
    //return res.end('<h1>Express is up for ToDoList App</h1>');
}