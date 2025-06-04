import axios from "axios"


async function getNotes() {
    let res = []

    res = await axios.get('http://localhost:7070/notes')
    .then(response => {
        return [...response.data].map((object, index) => {
            return {id: object.id, text: object.content}
        })
    })

    return res
}


async function addNote(index, text) {
    await axios.post('http://localhost:7070/notes', {id: index, content: text})
}


async function removeNote(id) {
    await axios.delete(`http://localhost:7070/notes/${id}`)
}


export {getNotes, addNote, removeNote}