//end point where somebody send a post request to /api/users to create a new user
const {Router}=require('express')
const {findUserByToken}=require('../../controllers/users')
const route =Router()
route.get('/', async(req,res)=>{
    let auth=req.headers['authorization']
    if(auth.startsWith('Token')){
        let token=auth.split('')[1]
        let user=await findUserByToken(token)
        return res.send(user)
    }
    //based on the token i can find the user
    else{
        res.status(401).send({
            "errors" : {
                "body": [
                  "Authorization token empty"
                ]
              }
        })
    }

})
module.exports={route}