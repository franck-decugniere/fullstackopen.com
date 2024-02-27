const Persons = ({ persons, newFilter, handleDelete }) => {
    return (<ul>
            {persons
                .filter((person) => newFilter.length == 0 || person.name.toUpperCase().includes(newFilter.toUpperCase()))
            .map((person) => { return <li key={person.name}>{person.name} {person.number}&nbsp;<button onClick={() => handleDelete(person)}>Delete</button></li> })}
        </ul>
    )
}

export default Persons