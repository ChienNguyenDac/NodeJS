import express from 'express'
import transferController from '../controllers/transfer.controller.js'

var transferRouter = express.Router()

//  /transfer
transferRouter.get('/create', transferController.create)
transferRouter.post('/create', transferController.postCreate)

export default transferRouter