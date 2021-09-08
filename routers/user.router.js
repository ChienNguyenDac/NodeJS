import express from 'express'
import userController from '../controllers/user.controller.js'
import validate from '../validate/user.validate.js'
//upload file from client to server
import multer from 'multer'
var upload = multer({ dest: './public/uploads/'})

var userRouter = express.Router()
//  root/users
userRouter.get('/', userController.index)

//  root/users/search
userRouter.get('/search', userController.search)

//  root/users/create
userRouter.get('/create', userController.getCreate)
userRouter.post('/create', upload.single("avatar"), validate.postCreate, userController.postCreate)

//  root/users/id
userRouter.get('/:id', userController.getId)

export default userRouter