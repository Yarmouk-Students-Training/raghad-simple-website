const express = require('express')
const { sequelize , user , post , comment , react ,friend } = require('./models')
const app = express()

app.use(express.json())

app.post('/user', async (req, res) => {  
    const {userID,name,email,password} = req.body
    try {
      const user = await User.create({userID,name,email,password  })
      return res.json(user)
      
    } catch (err) {
      console.log(err)
      return res.status(500).json(err)
    }   
})
app.post('/post', async (req, res) => {
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
app.post('/comment', async (req, res) => {
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
app.post('/react', async (req, res) => {
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
app.post('/friend', async (req, res) => {
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

//   app.get('/user', async (req, res) => {
//     try {
//       const user = await user.findAll()
  
//       return res.json(user)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
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
 


//   app.get('/post', async (req, res) => {
//     try {
//       const post = await post.findAll()
  
//       return res.json(post)
//     } catch (err) {
//       console.log(err)
//       return res.status(500).json({ error: 'Something went wrong' })
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