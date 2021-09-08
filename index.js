import dotenv from 'dotenv'
//protect csrf(cross-site request forgery )
import csrf from 'csurf'

//shortID create
import shortid from "shortid"

import express from "express"
const app = express()
const port = 5000

import  mongoose  from 'mongoose'

import cookieParser from 'cookie-parser'
import userRouter from './routers/user.router.js'
import authRouter from "./routers/auth.router.js"
import productRouter from './routers/product.router.js'
import authController from './controllers/auth.controller.js'
import cartRouter from './routers/cart.router.js'
import transferRouter from './routers/transfer.router.js'
import middlewareAuth from './middleware/auth.middleware.js'

import middlewareCart from './middleware/cart.middleware.js'

mongoose.connect(dotenv.config().parsed.MONGO_URL) 
//req.body
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//set template engines pug
app.set('view engine', 'pug')
app.set("views", "./views")
app.use(express.static('public'))

app.use(cookieParser(dotenv.config().parsed.SESSION_SECRET))

app.use(middlewareCart.createSessionId)
//app.use(csrf({cookie:true}))
//use middleware to count product in client cart
//  root
app.get('/', (req,res)=>{
    res.render("index",{
        countCart:3
    });
})

// root/users
app.use('/users', middlewareAuth.requireAuth, userRouter)

//  root/auth/login
app.use('/auth', authRouter)

//  root/products
app.use('/products', productRouter)

//  root/cart
app.use('/cart', cartRouter)

//  root/transfer
app.use('/transfer', middlewareAuth.requireAuth, transferRouter)
//create server
app.listen(port,()=>{
    console.log(`Server start at localhost:${port}`);
})
