import { useState, useEffect } from 'react'
import axios from 'axios'

import { Filter } from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import phoneBookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName.length > 0) {
      persons.filter(value => value.name === newName).length > 0 ? updatePerson() : addPerson()
    }
    setNewName('')
    setNewNumber('')
  }

  const handleDelete = (person) => {
    const confirmDelete = window.confirm(`Delete ${person.name} ?`)
    confirmDelete &&
      phoneBookService
        .deletePerson(person.id)
        .then(deletedPerson => setPersons(persons.filter(v => v.id !== deletedPerson.id)))
  }

  const addPerson = () => {
    phoneBookService
      .create({ 'name': newName, 'number': newNumber })
      .then(newPerson => setPersons(persons.concat(newPerson)))
  }

  const updatePerson = () => {
    const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)
    if (confirmUpdate) {
      const updatedPerson = { ...persons.filter(v => v.name === newName)[0], number: newNumber }
      confirmUpdate && phoneBookService
        .updatePerson(updatedPerson)
        .then(setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person)))
    }
  }

  const retrievePhonebook = () => {
    phoneBookService.getAll().then(response => setPersons(response))
  }

  useEffect(retrievePhonebook, [])

  return (
    <div>
      <h2>Phonebook</h2>

      {persons.length > 0 && <Filter value={newFilter} updateFilter={() => setNewFilter(event.target.value)} />}

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewName={() => setNewName(event.target.value)}
        handleNewNumber={() => setNewNumber(event.target.value)}
        handleSubmit={handleSubmit} />

      {persons.length > 0 && <h2>Numbers</h2>}
      <Persons newFilter={newFilter} persons={persons} handleDelete={handleDelete} />

      <hr />
      <h2>State debug</h2>
      <pre>
        <div>newName: {newName}</div>
        <div>newNumber: {newNumber}</div>
        <div>persons: {JSON.stringify(persons)}</div>
      </pre>
    </div>
  )
}

export default App