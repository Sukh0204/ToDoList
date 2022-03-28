const mongoose= require('mongoose');
const AddToDoSchema=mongoose.Schema({
    Description:{
        type: String,
        required: true
    },

    Category:{
        type: String, //also we choose from a list to check that, how to do that
        required: false
    },

    Date:{
        type: Date,
        required: true
    }
})

const Tasks=mongoose.model('Tasks', AddToDoSchema);
module.exports=Tasks;
