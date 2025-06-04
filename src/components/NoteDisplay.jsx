import Note from "./Note"
import styles from './NoteDisplay.module.css'


export default function NoteDisplay({noteList, removeNoteCallback}) {
    return (
        <ul className={styles['note-display']}>
            {[...noteList].map(({id, text}, index) => (
                <li key={index}>
                    <Note 
                    id={id}
                    text={text}
                    removeNoteCallback={removeNoteCallback}
                    />
                </li>
            ))}
        </ul>
    )
}