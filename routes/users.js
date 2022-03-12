const express= require('express');
const router= express.Router();
const userController= require('../controller/users_controller.js');

console.log('router is loaded');
router.get('/', userController.profile);
router.get('/posts', require('./posts'));
module.exports=router;
