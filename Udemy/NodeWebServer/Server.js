const express = require ('express');
const hbs = require ('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;

var app = express();

hbs.registerPartials(__dirname +'/Views/Partials');
app.set('view engine','hbs');

app.use((req,res,next)=>{
    var now = new Date().toString();
    var log = `${now} : ${req.method} ${req.url}`;
    
    fs.appendFile('server.log',log + '\n',(err)=>{
        if(err){
            console.log('Unable to append to server.log.');
        }
    });
    console.log(log);
    next();
});

// app.use((req,res,next)=>{
//     res.render('Maintainance.hbs');
// });

app.use(express.static(__dirname+'/Public'));

hbs.registerHelper('getCurrentYear',()=>{
    return new Date().getFullYear();
});

hbs.registerHelper('screamIt',(text)=>{
    return text.toUpperCase();
});

app.get('/',(req,res)=>{
    res.render('Home.hbs',{
        pageTitle : 'Home Page',
        message : 'Welcome to my site'
    });
});

app.get('/about',(req,res)=>{
    res.render('About.hbs',{
        pageTitle :'About Page'
    });
});

app.get ('/bad',(req,res)=> {
    res.send({
        errorMessage:'Unable to handle request'
    });
});
app.listen(port,()=>{
    console.log('Server is up on port no:',port);
});