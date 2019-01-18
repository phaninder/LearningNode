// var obj = {
//     name:'Phani'
// };

// var stringObj = JSON.stringify(obj);
// console.log(obj);
// console.log(typeof(stringObj));
// console.log(stringObj);

// var personString = '{"name" : "Phani","Age": 29}';
// var person = JSON.parse(personString);

// console.log(person);
// console.log(person.name);
// console.log(person.Age);

const fs = require ('fs');

var originalNote = {
    title :'Some Title',
    body : 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);
fs.writeFileSync('notes.json',originalNoteString);

var noteString = fs.readFileSync('notes.json');
var note = JSON.parse(noteString);
console.log(typeof(note));
console.log(note.title);