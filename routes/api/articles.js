const {Router}=require('express')
const {getAllArticles,createArticle}=require('../../controllers/articles')
const { userFromToken } = require('../../middlewares/auth')
const { findUserByToken }=require('../../controllers/users')

const route=Router()

//GET request to  /api/articles
route.get('/',async(req,res)=>{
    //res.send('TODO: list of all articles')

    const articles=await articles.findAll({
        attributes:[
            'slug','title','description','body',
            'createdAt','updatedAt'
        ],
        include:[{
            attributes:[username,bio,image],
            model:Users,
            as:'author'
        }]
    })
    return ({
        articles,
        articlesCount: articles.length
    })
})

// POST /api/articles
route.post('/', userFromToken, async (req, res) => {
 //if  userFromToken iske andr next call hota hai then the next middleware ie asyn()will b called else wahi se wapis ho jayega
    let a = req.body.article
    let article = await createArticle(
      a.title,
      a.description,
      a.body,
      req.user.username
    )
    res.send(article)
  })
module.exports={
    route
}