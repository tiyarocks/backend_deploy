const {Router}=require('express')
const route=Router()//same thing diff syntax
const articlesRoute=require('./articles').route
const profilesRoute=require('./profiles').route
const usersRoute=require('./users').route
const userRoute=require('./user').route
route.use('/articles',articlesRoute)
route.use('/profiles',profilesRoute)
route.use('/users',usersRoute)
route.use('/user',userRoute)

module.exports={
    route 
}