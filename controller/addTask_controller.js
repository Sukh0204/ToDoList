const model= require('../models/todos');
module.exports.task=function(req, res)
{
    
    model.create({
        Description:req.body.Description,
        Category:req.body.Category,
        Date: req.body.Date

    }, function(err, newmodel){
        if(err){console.log('error in creating new task');}
        console.log(newmodel);
        return res.redirect('back');
    })
}