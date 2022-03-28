const express= require('express');
const router= express.Router();
const addTaskController= require('../controller/addTask_controller.js');
console.log('task creation router loaded');
router.post('/', addTaskController.task);
module.exports=router;
