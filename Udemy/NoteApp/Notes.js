
const fs = require('fs');

var fetchNotes = () =>{
    try
    {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString); 
    }
    catch(e)
    {
        console.log('Failed to open file');
        return [];
    }
}

var saveNotes = (notes) =>{
    fs.writeFileSync('notes-data.json',JSON.stringify(notes));
}

var addNote = (title,body) =>{
    var notes = fetchNotes();
    var note = {
        title,
        body
    };
    
    var duplicateNotes = notes.filter((note)=>{
        return note.title === title;
    });

    if (duplicateNotes.length === 0)
    {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
    else
    {
        console.log("Note with title already exists");
        return null;
    }
};

var getAll = () =>{
    var notes = fetchNotes();

    return notes;    
};

var getNote = (title) => {
    var notes = fetchNotes();

    var readNote = notes.filter((note)=>{
        return note.title === title;
    });
        
    return readNote[0];
    
};

var removeNote = (title)=>{    
    var notes = fetchNotes();

    if(notes)
    {
        var removedNotes = notes.filter((note)=>{
            return note.title != title;
        });
        saveNotes(removedNotes);
        return (notes.length == removedNotes.length);
       
    }
    else
    {
        console.log("No file exists");
    }
};

var logNote = (note)=>{    
    console.log("Title:"+note.title +" Body:"+note.body);
};

module.exports= {
    addNote,
    getAll,
    getNote,
    removeNote,
    logNote
};