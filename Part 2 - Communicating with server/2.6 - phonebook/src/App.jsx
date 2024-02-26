import { useState } from 'react'
import { Filter } from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  
  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName.length > 0) {
      persons.filter(value => value.name === newName).length > 0 ? alert(`${newName} is already added to phonebook`) : setPersons(persons.concat({ 'name': newName, 'number': newNumber }))
    }
    setNewName('')
    setNewNumber('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={newFilter} updateFilter={() => setNewFilter(event.target.value)}/>
      
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={() => setNewName(event.target.value)} 
        handleNewNumber={() => setNewNumber(event.target.value)} 
        handleSubmit={handleSubmit}/>

      <h2>Numbers</h2>
      <Persons newFilter={newFilter} persons={persons}/>
      
      <hr />
      <pre>
        <div>newName: {newName}</div>
        <div>newNumber: {newNumber}</div>
        <div>persons: {JSON.stringify(persons)}</div>
      </pre>
    </div>
  )
}

export default App