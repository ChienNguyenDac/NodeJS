import express from 'express'
import cartController from '../controllers/cart.controller.js'

var cartRouter = express.Router()

//  /cart/id
cartRouter.get('/:id',cartController.addToCart)

export default cartRouter