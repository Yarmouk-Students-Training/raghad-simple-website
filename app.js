const express = require ('express');
const { create, method, result } = require('lodash');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');
const { render } = require('ejs');

// express app 
const app = express();

//connect to mongDB 
const dbURI = 'mongodb://RaghadSami:49582651@node-shard-00-00.sowxe.mongodb.net:27017,node-shard-00-01.sowxe.mongodb.net:27017,node-shard-00-02.sowxe.mongodb.net:27017/node-tuts?ssl=true&replicaSet=atlas-fa5e88-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI , {useNewUrlParser:true, useUnifiedTopology:true}).then((result)=> app.listen(3000)).catch((err)=> console.log(err));
// register view engine
app.set('view engine', 'ejs');
// middleare & static files 
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));
app.use(morgan('dev'));
//routes
app.get('/', (req , res)=>{
    res.redirect('/blogs');});
app.get('/about', (req,res)=>{
    res.render('about', {title: 'About'} );
});
// blog routes
app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt:-1}).then((result)=>{
        res.render('indexx',{title:'All blogs',blogs:result})
    }).catch((err)=>{console.log(err);})
});
app.post('/blogs', (req,res)=>{
    const blog =new Blog(req.body);

    blog.save().then((result)=>{
        res.redirect('/blogs');
    }).catch((err)=>{
        console.log(err);
    })
})
app.get('/blogs/:id', (req,res)=>{
    const id = req.params.id;
    Blog.findById(id).then(result => {
        res.render('details',{blog:result ,title:'Blog Datails' , })
    }).catch(err => {console.log(err);})
})
app.delete('/blogs/:id', (req , res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then(result =>{
        res.json({redirect:'/blogs'});        
    }).catch(err => {
        console.log(err);
    })
})

app.get('/blogs/create' , (req ,res)=>{
    res.render('create',{title: 'Create'});
})
// 404 page
app.use((req,res)=>{
    res.status(404).render('4044', {title: '404'});
});