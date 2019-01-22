var express = require('express');

var app = express();

app.get('/',(req,res)=>{
    res.send('Hello World');
});

app.get('/users',(req,res)=>{
    var users =[
        {name:'Phani',age:29},
        {name:'Vicky',age:29},
        {name:'M',age:25}
    ];
    res.send(users);
});

app.listen(3000);
module.exports.app = app;