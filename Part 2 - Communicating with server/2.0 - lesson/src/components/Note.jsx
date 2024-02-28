const Note = ({ note, toggleImportance }) => {
    const label = note.important
        ? '-' : '+'
    return (
        <li className='note'>
            <button onClick={toggleImportance}>{label}</button>
            <span>&nbsp;</span>
            {note.important ? <b>{note.content}</b> : note.content}

        </li>
    )
}

export default Note