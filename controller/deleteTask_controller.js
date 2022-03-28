const Item= require('../models/todos');

//delete many
module.exports.del=function(req, res)
{
    let Check_id=req.body.check;
    console.log(req.body);
    console.log(typeof Check_id);
    console.log(Check_id,"=========check")
    if(typeof Check_id === "string"){
        console.log("line 10");
        Item.findByIdAndDelete(Check_id, function(err){
            if(err){
                console.log('error');
                return;
            }
        });
    }
    return res.redirect('back');}

    
