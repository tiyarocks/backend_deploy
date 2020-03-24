const {Router}=require('express')
const route=Router()
//GET request to  /api/articles
route.get('/username',(req,res)=>{
    res.send('TODO: Profile page of'+req.params.username)
})
//POST request to /api/articles
route.post('/username',(req,res)=>{
    res.send('TODO: Profile page of'+req.params.username+' has been added')
})
module.exports={
    route
}