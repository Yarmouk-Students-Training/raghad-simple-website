const express = require('express');
const { sequelize, user, post , comment , react , friend} = require('./models')
const { Sequelize } = require('sequelize');
const jwt = require('jsonwebtoken');
 //register app
 const app = express();
 require('dotenv').config()
 
 const PORT = process.env.PORT || 3000;
 app.listen(PORT, console.log('server started on port ',PORT));
  //connect to database nad start server
 const dbconnect = new Sequelize('Database', 'postgres', '49582651', {
     host: 'localhost',
     dialect: 'postgres'
 });
 /// db connect test
 dbconnect.authenticate()
    .then(() => console.log('db connected seccusfully'))
    .catch(err => console.log('db error: ' + err))
    /// tables syncing ..
   user.sync({force : false}).then(() => {
      console.log('user table synced');
      
     });
 app.use(express.json());

 ////////
//format of token //
// autherization 
// Verify Token
function verifyToken (req,res,next){ 

const authHeader = req.headers['authorization']
// console.log(authHeader);
 if (authHeader == null) {
     next()
 } else {

     jwt.verify(authHeader,'secretkey',{expiresIn:'10s'}, (err, userid) => {
         console.log(err)
         // if (err) return res.sendStatus(401).json("please login")
         req.userid = userid
         
         next()
    
     })
 }
 }

// user login & signin
 app.post('/user/signup', verifyToken,async (req,res)=>{
   if ( req.userid) {
     return res.json("you don't need to sign up user already exist")
   }
  const {userID , name, email , password} = req.body;
  try {
    const User = await user.create({ name, password, email } )
    jwt.sign({User}, 'secretkey', (err,token)=>{
        res.json({token})
      });

      }
      catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
 })
// 
app.get('/user/login',verifyToken, async (req,res)=>{
  if ( req.userid) {
    return res.json("you don't need to login user already login")
  }
  const { email , password} = req.body;
  try {
    const User = await user.findOne({ where:  {email , password}  })
    jwt.sign({User}, 'secretkey', {expiresIn:'30s'},(err,token)=>{
        res.json({token})
      });

      }
      catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
 })

 ///
 
 /////// for user /////
 //create user
 app.post('/users', async (req, res) => {
  const { name , password , email } = req.body
  const id = req.params.id
  try {
      const User = await user.create({ name, password, email } )
      return res.json(User)

  }   catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})
app.get('/user', async (req, res) => {
  const {userID} = req.body;
    try {
      const User = await user.findOne({ where:  {userID}  })
      return res.json(User)
        } 
      catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
        }
})

  app.put('/user', async(req,res)=>{
    const {userID,name,email,password} = req.body
    const id = req.params.id

    try {
      const User = await user.findOne({where:{userID}})
      User.name = name
      User.email=email
      User.password=password
      await User.save()
      return res.json(User)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.delete('/user', async(req,res)=>{
      //const id = req.params.id;
      const {userID} = req.body;
    try {
      const User = await user.findOne({where:{userID}})
      await User.destroy()
      return res.json({message:'user deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

// //// for post ////
  app.get('/user/post', async (req, res) => {
    const id = req.params.id;
    const {postID} = req.body;
      try {
        const Post = await post.findAll({where : {postID}})
        return res.json(Post)
          } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
         }
    })
    app.post('/user/post', async (req, res) => {
      const { postID,userID,public_date , content , comment,react } = req.body
      const id = req.params.id;
      try {
          const Post = await post.create({ postID,userID,public_date,content, comment,react } )
          return res.json(Post)
    
      }   catch (err) {
          console.log(err)
          return res.status(500).json(err)
        }
    })
    app.put('/user/post', async(req,res)=>{
      const {postID,userID,content} = req.body
      const id = req.params.id
  
      try {
        const Post = await post.findOne({where:{postID}})
        Post.content= content
        await Post.save()
        return res.json(Post)
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
    })
  app.delete('/user/post', async(req,res)=>{
    const id = req.params.id;
    const {postID,userID} = req.body
    try {
      const Post = await post.findOne({id})
      await Post.destroy()
      return res.json({message:'Post Deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

// ///// for comment //// 
    app.get('/user/post/comment', async (req, res) => {
    const {postID,userID,commentID} = req.body
    const id = req.params.id;
      try {
        const Comment = await comment.findAll({id})
        return res.json(Comment)
        }
        catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
        }
    })

app.post('/user/post/comment', async (req, res) => {
    const {userID, postID , commentID , name,content } = req.body
    try {
        const Comment = await comment.create({userID,postID,commentID ,name,content})
      return res.json(Comment)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})

  app.put('/user/post/comment', async(req,res)=>{
    const {userID,postID,commentID,content} = req.body
    const id = req.params.id;
    try {
      const Comment = await comment.findOne({id})
      Comment.content = content
      await Comment.save()
      return res.json(Comment)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.delete('/user/post/comment', async(req,res)=>{
    const id = req.params.id;
    const {userID,postID,commentID} = req.body
    try {
      const Comment = await comment.findOne({id})
      await Comment.destroy()
      return res.json({message:'Comment deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

// /// for react ////
    app.get('/user/post/react', async (req, res) => {
    const id = req.params.id;
    const {userID,postID,reactID} = req.body
      try {
        const React = await react.findAll({id})
        return res.json(React)
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
    })

  app.post('/user/post/react', async (req, res) => {
    const {userID, postID , reactID , type } = req.body
      try {
        const React = await react.create({userID,postID,reactID ,type})
        return res.json(React)
          } 
      catch (err) {
        console.log(err)
        return res.status(500).json(err)
      }
  })

  app.put('/user/post/react', async(req,res)=>{
    const {userID,postID,reactID,type} = req.body
    const id = req.params.id;
    try {
      const React = await react.findOne({id})
      React.type = type
      await React.save()
      return res.json(React)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.delete('/user/post/react', async(req,res)=>{
    const id = req.params.id;
    const {userID,postID,reactID} = req.body
    const React = await react.findOne({ where: { userID, postID } })
    try {
      if (React){
      await React.destroy()
      return res.json({message:'React deleted'})
      }
      else{
        return res.json({message:'did not founded React'})
      }
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

 

/// for friend ////
app.get('/user/friend', async (req, res) => {
  const id = req.params.id;
  const {user1,user2} = req.body
    try {
      const Friend = await friend.findOne({user1 , user2})
      return res.json(Friend)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

app.post('/user/friend', async (req, res) => {
  const {action, user1 , user2} = req.body
    try {
      const Friend = await friend.create({action,user1 ,user2})
      return res.json(Friend)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})

  app.put('/user/friend', async(req,res)=>{
    const {action,user1,user2} = req.body
    const id =req.params.id
    try {
      const Friend = await friend.findOne({where:{user1 , user2}})
      Friend.action = action
      await Friend.save()
      return res.json(Friend)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.delete('/user/friend', async(req,res)=>{
    const {user1 , user2}= req.body
    const id = req.params.friendID;
    try {
      const Friend = await friend.findOne({user1, user2})
      await Friend.destroy()
      return res.json({message:'Friend deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  