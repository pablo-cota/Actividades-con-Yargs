const fs = require('fs')

const addNote = function(title,body){
    console.log("El título de la nota", title)
    console.log("El cuerpo de la nota",body)
    const notes = loadNotes()
    const duplicateNote = notes.find(
        (note)=>note.title === title
    )
    if(!duplicateNote){
        notes.push(
            {
                title:title,
                body:body
            }
        )
        //Guardar en el archivo
        saveNotes(notes)
        console.log("Notas creadas!")
    }else{
        console.log("Notas creadas")
    }
}

//Guardar notas
const saveNotes = function(notes){
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json", dataJSON)
}

//Cargar notas
const loadNotes = function(){
    try {
        const dataBuffer = fs.readFileSync("notes.json")
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//Listar notas
const listNotes = function(){
    const notes = loadNotes()
    notes.forEach((note)=>{
        console.log("El título de la nota: ", note.title)
        console.log("El cuerpo de la nota: ", note.body)  
    });
}

//Quitar notas
const removeNote = function(title){
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=>note.title != title)
    if (notes.length >notesToKeep.length){
        console.log("Note removed!!")
        saveNotes(notesToKeep)
    } else{
        console.log("Note not found!!")
    }
}

//Leer notas
const readOneNote = function(title){
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log("Nota encontrada!!")
        console.log(note.title, note.body)
    }else{
        console.log("Nota no encontrada!!")
    }
}

//Modificar notas
const modifyNote = function(title, newtitle, newbody){
    const notes = readOneNote(title)
    const note = removeNote(title)
    const newnote = addNote(newtitle, newbody) 
}

module.exports = {
    addNote:addNote,
    listNotes:listNotes,
    removeNote:removeNote,
    readOneNote:readOneNote,
    modifyNote:modifyNote
}