//const MongoClient = require ('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return   console.log('Unable to connect to MongoDb server');
    }
    console.log('Connected to MongoDB server');
   
    //delete Many
    // try{
    //     db.collection('Todos').deleteMany({text:'Walk the Dog'}).then((result)=>{
    //         console.log(result);
    //     });
    // } catch(e){
    //     console.log(e);
    // }

    //delete One
    // db.collection('Users').deleteOne({name:'Phani'}).then((result)=>{
    //     console.log(result);
    // });

    //Find one and delete
    db.collection('Users').findOneAndDelete({_id : new ObjectID('5c471c24529f4e622fbac99d')}).then((result)=>{
        console.log(result);
    });
    db.close();
    
});