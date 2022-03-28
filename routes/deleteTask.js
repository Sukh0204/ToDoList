const express= require('express');
const router= express.Router();
const deleteTaskController= require('../controller/deleteTask_Controller.js');
console.log('task deletion router loaded');
router.post('/', deleteTaskController.del);
module.exports=router;