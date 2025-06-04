import InputForm from './components/InputForm'
import NoteDisplay from './components/NoteDisplay'
import { getNotes, addNote, removeNote } from './backendHandler'
import { useEffect, useState } from 'react'
import refreshIcon from './assets/refresh.svg'
import './App.css'


function App() {
  const [notesList, setNotesList] = useState([])


  async function refreshNotesList() {
    const notes = await getNotes()
    setNotesList(notes)
  }

  async function addNoteLocal(text) {
    const id = notesList.length
    await addNote(id, text)
    refreshNotesList()
  }

  async function removeNoteLocal(index) {
    await removeNote(index)
    refreshNotesList()
  }


  useEffect(() => {
    refreshNotesList()
  }, [])

  return (
    <div>
      <button className='refresh-button'>
        <img onClick={(e) => {refreshNotesList()}} src={refreshIcon} />
      </button>
      <h1>Notes</h1>
      <NoteDisplay 
        noteList={notesList} 
        removeNoteCallback={removeNoteLocal}
      />
      <InputForm addNoteCallback={addNoteLocal}/>
    </div>
  )
}

export default App
