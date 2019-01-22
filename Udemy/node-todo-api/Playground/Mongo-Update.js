//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return   console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
   
    // db.collection('Users').findOneAndUpdate(
    //     {_id : new ObjectID("5c472352529f4e622fbacc8a")},
    //     {
    //         $set:{
    //             name:'Buddha'
    //         },
    //         $inc:{
    //              age:-2   
    //         }
    //     },{
    //         returnOriginal:false
    //     }).then((result)=>{
    //         console.log(result);
    //     });
    
    db.collection('Users').insertOne({name:'TestName',age:24,location:'Earth'}).then((result)=>{
        console.log(result);
    });
    db.close();
    
});