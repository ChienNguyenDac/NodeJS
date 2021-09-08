import express from 'express'
import productController from '../controllers/product.controller.js'
var productRouter = express.Router()

productRouter.get('', productController.index)

export default productRouter