export default function getNotes(){
    return ("Tus notas...")
}

export function createNotes(title, body){
    console.log("Titulo de la nota: ", title)
    console.log("Body de la nota: ", body)
    return "Nota creada"
}