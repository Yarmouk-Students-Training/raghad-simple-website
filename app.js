const express = require ('express');
const { create, method } = require('lodash');
const morgan = require('morgan');

// express app 
const app = express();

// register view engine
app.set('view engine', 'ejs');
//app.set('view','myview');

// listen for requests 
app.listen(3000);

// app.use((req ,res , next )=>{
//     console.log('New Request made:');
//     console.log('host:',req.hostname);
//     console.log('path', req.path);
//     console.log('method:',req.method);
//     next();
// })
// middleare & static files 
app.use(express.static('public'));
 app.use(morgan('tiny'));


app.get('/', (req , res)=>{
    //res.send('<P> home page </p>')
    //res.sendFile('./view/index.html' ,{root:__dirname});
    const blogs = [
        {title: 'Raghad finds eggs', snippet:'lorem ipsum dolor sit amet consectetur'},
        {title: 'Ahmad finds stars', snippet:'lorem ipsum dolor sit amet consectetur'},
        {title:'How to defeat browser', snippet:'lorem ipsum dolor sit amet consectetur'},
    ];
    res.render('indexx' ,{title: 'Home' , blogs});

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
 