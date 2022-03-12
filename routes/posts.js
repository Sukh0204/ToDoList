const express= require('express');
const router= express.Router();
const postController= require('../controller/posts_controller.js');
console.log('Practise controller is loaded');
router.get('/', postController.ninja);
module.exports=router;
