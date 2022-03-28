const express= require('express');
const router= express.Router();
const homeController= require('../controller/home_controller.js');

console.log('router is loaded');
router.get('/', homeController.home);
router.use('/profile', require('./users.js'));
router.use('/posts', require('./posts.js'));
router.use('/add-task', require('./addTask.js'));
router.use('/delete-task', require('./deleteTask'));
module.exports=router;
