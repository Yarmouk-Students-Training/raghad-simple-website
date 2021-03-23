const express = require('express')
const { sequelize } = require('./models')
const app = express()

//app.use(express.json())
// app.post('/user', async (req, res) => {
//     const {userID,name,email,password  } = req.body
  
//     try {
//       const user = await User.create({userID,name,email,password  })
  
//       return res.json(user)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json(err)
//     }
//   })
//   app.get('/user', async (req, res) => {
//     try {
//       const user = await user.findAll()
  
//       return res.json(user)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })

//   app.post('/friend', async (req, res) => {
//     const {friendID, userID,accept,reject,block } = req.body
  
//     try {
//       const friend = await User.create({friendID, userID,accept,reject,block  })
  
//       return res.json(friend)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json(err)
//     }
//   })

//   app.get('/friend', async (req, res) => {
//     try {
//       const friend = await friend.findAll()
  
//       return res.json(friend)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })
 
//   app.post('/post', async (req, res) => {
//     const {postID, userID,content,public_date,comment,react } = req.body
  
//     try {
//       const post = await User.create({postID, userID,content,public_date,comment,react})
  
//       return res.json(post)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json(err)
//     }
//   })

//   app.get('/post', async (req, res) => {
//     try {
//       const post = await post.findAll()
  
//       return res.json(post)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })
//   app.post('/comment', async (req, res) => {
//     const {commentID , postID, userID,name,content } = req.body
  
//     try {
//       const comment = await User.create({commentID , postID, userID,name,content})

//       return res.json(comment)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json(err)
//     }
//   })

//   app.get('/comment', async (req, res) => {
//     try {
//       const comment = await comment.findAll()
  
//       return res.json(comment)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })
//   app.post('/react', async (req, res) => {
//     const {commentID , postID, userID,name,content } = req.body
  
//     try {
//       const react = await User.create({reactID , postID, userID,type})
      
//       return res.json(react)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json(err)
//     }
//   })

//   app.get('/react', async (req, res) => {
//     try {
//       const react = await react.findAll()
  
//       return res.json(react)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
//     }
//   })



app.listen({ port:3000 }, async () => {
    console.log('Server up on http://localhost:3000')
    //await sequelize.sync({ force:true })
    await sequelize.authenticate()
    //console.log('Database synced!')
    console.log('Database connected!')
})