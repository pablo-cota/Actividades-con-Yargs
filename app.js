const notes = require('./notes.js')
const yargs = require('yargs')
const {loadNotes} = require ('./notes.json')

console.log("Ejecutado")
yargs.version("1.1.0")

//Crear comando add
yargs.command(
    {
        command: 'add',
        describe: 'Add new note',
        builder: {
            title: {
                describe: "Note title",
                demandOption: true,
                type: 'string'
            },
            body:{
                describe: "Note body",
                demandOption: true,
                type: 'string'
            }
        },
        handler(argv){
            console.log("Hola")
            notes.addNote(argv.title,argv.body)
        }
    }
)

//Comando para leer las notas, read
yargs.command(
    {
        command:"read",
        describe:"Read notes",
        handler(){
            notes.listNotes()
        }
    }
)

//Comando para remover parte de las notas, remove
yargs.command({
    command: "remove",
    describe: "Remove a note",
    builder:{
        title:{
            describe: "Note tittle",
            demandOption: true,
            type: "string"
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
}
)

//Comando para llear una sola nota, readOneNote
yargs.command({
    command: "readOneNote",
    describe: "Read one note",
    builder: {
        title:{
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readOneNote(argv.title)
    }
})

yargs.parse()