console.log('starting');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./Notes.js');

const titleOptions ={
    describe :'Title of note',
    demand:true,
    alias :'t'
};

const bodyOptions ={
    describe :'Body of note',
    demand:true,
    alias :'b'
};

const argv = yargs
    .command('add','Add a new note',{
        title:titleOptions,
        body:bodyOptions
    })
    .command('list','List all note')
    .command('read','Read a note',{
        title:titleOptions
    })
    .command('remove','Remove a note',{
        title:titleOptions
    })
    .help()
    .argv;
var command  = argv._[0];

if(command == 'add')
{
    var note = notes.addNote(argv.title,argv.body);
    if(note != null)
    {
        console.log("Successfully added note");
        notes.logNote(note);
    }
}
else if(command == "list")
{
   var list = notes.getAll();

   if(list)
    {
        (list).forEach(note => {            
           notes.logNote(note);
        });  
    }
    else
    {
        console.log("No note found");
    }
}
else if(command == "read")
{
   var readNote = notes.getNote(argv.title);
   if(readNote)
    {
        notes.logNote(readNote);
    }  
    else
    {
        console.log("No note found");
    }
}
else if(command == "remove")
{
    var deleted = notes.removeNote(argv.title);
    if(deleted)
    {
        console.log("No note was removed");
    }
    else
    {
        console.log("Removed note with titile:"+title);
    }
}
else
{
    console.log("command not recognized");
}

