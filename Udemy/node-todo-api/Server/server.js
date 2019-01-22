var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    },
    completedAt:{
        type:Number
    }
});

var newToDo = new Todo({
    text:'Complete Registration for Yogs',
    completed:true,
    completedAt : 22012019
});

newToDo.save().then((result)=>{
    console.log('Saved data ',result);
},(err)=>{
    console.log('Unable to save todo');
});