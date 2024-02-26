const Persons = ({ persons, newFilter }) => {
    return (
        <ul>
            {persons
                .filter((person) => newFilter.length == 0 || person.name.toUpperCase().includes(newFilter.toUpperCase()))
                .map((person) => { return <li key={person.name}>{person.name} {person.number}</li> })}
        </ul>
    )
}

export default Persons