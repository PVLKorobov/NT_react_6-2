import { useState } from "react";
import styles from './InputForm.module.css'
import sendIcon from '../assets/send.svg'


export default function InputForm({addNoteCallback}) {
    const [inputText, setInputText] = useState('')


    function handleFormSubmit(e) {
        e.preventDefault()
        if (inputText !== '') {
            addNoteCallback(inputText)
            setInputText('')
        }
    }


    return (
        <form className={styles['input-form']} onSubmit={handleFormSubmit}>
            <div className={styles.input__wrapper}>
                <label className={styles.input__label} htmlFor="textInput">New note</label>
                <textarea className={styles.input__field} value={inputText} onChange={(e) => {setInputText(e.target.value)}} type="text" name="textInput"/>
            </div>
            <button className={styles['submit-button']} type="submit">
                <img src={sendIcon} />
            </button>
        </form>
    )
}