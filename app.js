const express = require ('express');
const { create, method, result } = require('lodash');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog = require('./models/blog');

// express app 
const app = express();

//connect to mongDB 
const dbURI = 'mongodb://RaghadSami:49582651@node-shard-00-00.sowxe.mongodb.net:27017,node-shard-00-01.sowxe.mongodb.net:27017,node-shard-00-02.sowxe.mongodb.net:27017/node-tuts?ssl=true&replicaSet=atlas-fa5e88-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(dbURI , {useNewUrlParser:true, useUnifiedTopology:true}).then((result)=> app.listen(3000)).catch((err)=> console.log(err));
 // register view engine
app.set('view engine', 'ejs');
//app.set('view','myview');

// listen for requests 
//app.listen(3000);

// app.use((req ,res , next )=>{
//     console.log('New Request made:');
//     console.log('host:',req.hostname);
//     console.log('path', req.path);
//     console.log('method:',req.method);
//     next();
// })
// middleare & static files 
app.use(express.static('public'));
app.use(morgan('dev'));


//mongoose and mongo sandbox routes
 app.get('/add-blog',(req, res)=>{
//     const blog = new Blog({
//         title:'new blog',
//         snippet: 'about my new blog 2',
//         body:'more about my new blog'
     });

//     blog.save().then((result)=>{
//         res.send(result)
//     }).catch((err)=>{console.log(err);});
// });


// app.get('/all-blogs',(req,res)=>{
//     Blog.find().then((result)=>{
//         res.send(result);
//     }).catch((err)=>{console.log(err);})
// });

// app.get('/single-blog',(req,res)=>{
//     Blog.findById('6052f111b0f885058453e394')
//     .then((result)=>{
//         res.send(result)
//     }).catch((err)=>{console.log(err);});
// })
//routes
app.get('/', (req , res)=>{
    res.redirect('/blogs');

    //res.send('<P> home page </p>')
    //res.sendFile('./view/index.html' ,{root:__dirname});
    // const blogs = [
    //     {title: 'Raghad finds eggs', snippet:'lorem ipsum dolor sit amet consectetur'},
    //     {title: 'Ahmad finds stars', snippet:'lorem ipsum dolor sit amet consectetur'},
    //     {title:'How to defeat browser', snippet:'lorem ipsum dolor sit amet consectetur'},
    // ];
    // res.render('indexx' ,{title: 'Home' , blogs});

});

// app.use((req ,res , next )=>{
//     console.log('in the next middleware');
//     next();
// })

app.get('/about', (req,res)=>{
   // res.send('<p>about page</p>')
   //res.sendFile('./views/about.html',{root:__dirname});
   
   res.render('about', {title: 'About'} );
});
// blog routes
app.get('/blogs', (req,res)=>{
    Blog.find().sort({createdAt:1}).then((result)=>{
        res.render('indexx',{title:'All blogs',blogs:result})
    }).catch((err)=>{console.log(err);})
});

app.get('/blogs/create' , (req ,res)=>{
    res.render('create',{title: 'Create'});
})
 // redirects
//  app.get('/about-us', (req, res)=>{
//      res.redirect('/about');
//  });

 // 404 page
 app.use((req,res)=>{
     //res.sendFile('./views/404.html' , {root:__dirname})
     res.status(404).render('4044', {title: '404'});
 });
 