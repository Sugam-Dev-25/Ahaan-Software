const express=require('express')
const router=express.Router()
const userController=require('../controllers/userController')

router.post('/user/create', userController.createUser)

router.post('/user/login', userController.loginUser)

module.exports=router;