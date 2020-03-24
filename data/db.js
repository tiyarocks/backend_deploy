const Sequelize=require('sequelize')
//initialize connection btw mysql2 and sequelize
const db=new Sequelize({
    dialect: 'mysql',
    database:'realworldio',
    username:'conduit',
    password:'conduit'    
})
//initializing User model will allow us to manipulate database using objects instead of sql queries
const Users=db.define('user',{
    email:{
        type:Sequelize.STRING,
        //unique:true,
        allowNull:false
    },
    username:{
        type:Sequelize.STRING,
        primaryKey:true
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    },
    token:{
        type:Sequelize.STRING(32),
        allowNull:false
    },
    bio:{
        type:Sequelize.TEXT
    },
    image:{
        type:Sequelize.STRING           
    }

})
const Articles=db.define('articles',{
    "slug": {
        type: Sequelize.STRING(100),
        primaryKey: true
    },
    "title": {
        type: Sequelize.STRING,
        allowNull: false
    },
    "description": {
        type: Sequelize.STRING
    },
    "body": {
        type: Sequelize.TEXT
    },
    // TODO: Add favourites fields
})

Articles.belongsTo(Users)
Users.hasMany(Articles)

module.exports={
    db,
    Users,
    Articles
}