const express = require('express')
const { sequelize , user , post , comment , react ,friend } = require('./models')
const app = express()

app.use(express.json())
// POST 
app.post('/user/:id', async (req, res) => {  
    const {userID,name,email,password} = req.body
    try {
      const user = await User.create({userID,name,email,password  })
      return res.json(user)
      
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }   
})
app.post('/user/post/:id', async (req, res) => {
    const {postID, userID,content,public_date,comment,react } = req.body
    try {
      const user = await user.findOne({userID})
      const post = await post.create({postID, userID,content,public_date,comment,react})
      return res.json(post)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})
app.post('/post/comment/:id', async (req, res) => {
    const {userID,commentID , name,content } = req.body
    try {
        const user = await user.findOne({userID})
        const comment = await User.create({userID,commentID ,name,content})
      return res.json(comment)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})
app.post('/post/react/:id', async (req, res) => {
    const {userID,reactID ,type } = req.body
    try {
      const user = await user.findOne({userID})
      const react = await User.create({userID,reactID ,type})
      return res.json(react)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
})
app.post('/user/friend/:id', async (req, res) => {
    const {userID, friendID,action } = req.body
    try {
      const user = await user.findOne({userID})
      const friend = await User.create({user1: userID, user2: friendID,action})
      return res.json(friend)
        } 
    catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }
  })
  // GET
  app.get('/user/:id', async (req, res) => {
    try {
      const user = await user.findOne({userID})
      return res.json(user)
    } catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

    app.get('/user/post/:id', async (req, res) => {
      try {
        const post = await post.findAll({userID})
        return res.json(post)
          } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
         }
    })

    app.get('/user/post/comment/:id', async (req, res) => {
      try {
        const comment = await comment.findAll({postID})
        return res.json(comment)
        }
        catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
        }
    })
    app.get('/user/post/react/:id', async (req, res) => {
      try {
        const react = await react.findAll({postID})
        return res.json(react)
      } 
      catch (err) {
        console.log(err)
        return res.status(500).json({ error: 'Something went wrong' })
      }
    })
  
  app.get('/user/friend/:id', async (req, res) => {
    try {
      const friend = await friend.findAll({userID})
      return res.json(friend)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  // PUT
  app.put('/user/:id', async(req,res)=>{
    const {userID,name,email,password} = req.body
    try {
      const user = await user.findOne({userID})
      user.name = name
      user.email=email
      user.password=password
      await user.save()
      return res.json(user)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
 
  app.put('/user/post/:id', async(req,res)=>{
    const {userID,postID,content,public_date} = req.body
    try {
      const post = await post.findOne({postID})
      post.content = content
      await post.save()
      return res.json(post)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.put('/user/post/comment/:id', async(req,res)=>{
    const {userID,postID,commentID,content} = req.body
    try {
      const comment = await comment.findOne({commentID})
      comment.content = content
      await user.save()
      return res.json(comment)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.put('/user/post/react/:id', async(req,res)=>{
    const {userID,postID,reactID,type} = req.body
    try {
      const user = await user.findOne({reactID})
      react.type = type
      await user.save()
      return res.json(react)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })

  app.put('/user/friend/:id', async(req,res)=>{
    const {userID,friendID,action} = req.body
    try {
      const friend = await friend.findOne({friendID})
      friend.action = action
      await user.save()
      return res.json(friend)
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  // DELETE 
  app.delete('/user/:id', async(req,res)=>{
    const {userID,name,email,password} = req.body
    try {
      const user = await user.findOne({userID})
      await user.destroy()
      return res.json({message:'user deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.delete('/user/post/:id', async(req,res)=>{
    const {userID,postID,content,public_date} = req.body
    try {
      const post = await post.findOne({postID})
      await post.destroy()
      return res.json({message:'post deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.delete('/user/post/comment/:id', async(req,res)=>{
    const {userID,postID,commentID,content} = req.body
    try {
      const comment = await comment.findOne({commentID})
      await comment.destroy()
      return res.json({message:'comment deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.delete('/user/post/react/:id', async(req,res)=>{
    const {userID,postID,reactID,type} = req.body
    try {
      const react = await react.findOne({reactID})
      await react.destroy()
      return res.json({message:'react deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
  app.delete('/user/friend/:id', async(req,res)=>{
    const {userID,friendID} = req.body
    try {
      const friend = await friend.findOne({friendID})
      await friend.destroy()
      return res.json({message:'friend deleted'})
    } 
    catch (err) {
      console.log(err)
      return res.status(500).json({ error: 'Something went wrong' })
    }
  })
app.listen({ port:3000 }, async () => {
    console.log('Server up on http://localhost:3000')
    //await sequelize.sync({ force:true })
    await sequelize.authenticate()
    //console.log('Database synced!')
    console.log('Database connected!')
})