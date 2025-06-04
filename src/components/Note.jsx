import styles from './Note.module.css'
import closeIcon from '../assets/close.svg'


export default function Note({id, text, removeNoteCallback}) {
    return (
        <div className={styles.note__wrapper}>
            <p className={styles.note__text}>{text}</p>
            <button className={styles['remove-button']} onClick={(e) => {removeNoteCallback(id)}}>
                <img src={closeIcon} />
            </button>
        </div>
    )
}