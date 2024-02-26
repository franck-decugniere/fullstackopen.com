import { useState, useEffect } from 'react'
import axios from 'axios'

import { Filter } from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  const [persons, setPersons] = useState([])
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

  const fetchPhoneBook = () => {
    axios
      .get('http://localhost:3001/persons')
      .then( response => setPersons(response.data) )
  }
  useEffect(fetchPhoneBook,[])


  return (
    <div>
      <h2>Phonebook</h2>

      {persons.length > 0 && <Filter value={newFilter} updateFilter={() => setNewFilter(event.target.value)}/>}
      
      <h2>Add a new</h2>
      <PersonForm 
        newName={newName} 
        newNumber={newNumber} 
        handleNewName={() => setNewName(event.target.value)} 
        handleNewNumber={() => setNewNumber(event.target.value)} 
        handleSubmit={handleSubmit}/>

      {persons.length > 0  && <h2>Numbers</h2>}
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