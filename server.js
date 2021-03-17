const http = require ('http');
const fs =require('fs');
const _ = require('lodash');

const server = http.createServer(
    (req , res) => {
        //console.log(req.url, req.method);

        //lodash
        const num = _.random(0,20);
        console.log(num);
        const greet = _.once(()=>{
            console.log('Hello');
        });

        greet();
        greet();//doesn't worked becouse i use once function in lodash 

        //set header content type
        res.setHeader('content-Type', 'text/html')
        let path = './views/';    
        switch(req.url){
            case '/':
                path += 'index.html';
                res.statusCode = 200;
                break;
            case '/about':
                path += 'about.html';
                res.statusCode = 200;
                break;
            case '/about-us':
                res.statusCode = 301;
                res.setHeader('Location', '/about');
                res.end();
                break;
            default:
                path += '404.html';
                res.statusCode = 404;
                break;
        }    
        // res.write('<head><link rel="styleseet" herf="#"></head>')
        // res.write('<p> hello , Raghad </p>');
        // res.write('<p>Hello again</p>');
        // res.end();
        //send html file
        fs.readFile(path , (err,data)=>{
        if (err) {console.log(err);res.end();}
        else {
        //res.write(data);
        
        res.end(data);
        }
        });
    }
    );

    server.listen(3000,'localhost' , ()=>{
        console.log('listening for requests on port 3000');
    
    })