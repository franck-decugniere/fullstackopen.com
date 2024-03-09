import { useState, useEffect } from 'react'

import { Filter } from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'
import phoneBookService from './services/phonebook'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [notificationMessage, setNotificationMessage] = useState(null)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (newName.length > 0) {
      persons.filter(value => value.name === newName).length > 0 ? updatePerson() : addPerson()
    }

  }

  const deletePerson = async (person) => {
    const confirmDelete = window.confirm(`Delete ${person.name} ?`)
    if (confirmDelete) {
      try {
        await phoneBookService.deletePerson(person.id)
        setPersons(persons.filter(v => v.id !== person.id))
      } catch (error) {
        handleDeleteError(person)
      }
    }
  }

  const handleDeleteError = (person) => {
    showMessage({ text: `Information of ${person.name} has already been removed from server`, level: 'error' })

  }

  const addPerson = async () => {
    try {
      const newPerson = await phoneBookService.create({ 'name': newName, 'number': newNumber })
      setPersons(persons.concat(newPerson))
      showMessage({ text: `Added  ${newName}`, level: 'info' })
      setNewName('')
      setNewNumber('')
    } catch (error) {
      showMessage({ text: `Error ${error.response.data.error}`, level: 'error' })
    }
  }

  const showMessage = (message) => {
    setNotificationMessage(message);
    setTimeout(() => setNotificationMessage(null), 2000)

  }

  const updatePerson = async () => {
    const confirmUpdate = window.confirm(`${newName} is already added to phonebook, replace the old number with a new one ?`)
    
    if (confirmUpdate) {
      try {
        const updatedPerson = { ...persons.filter(v => v.name === newName)[0], number: newNumber }
        await phoneBookService.updatePerson(updatedPerson)
        setPersons(persons.map(person => person.id === updatedPerson.id ? updatedPerson : person))
        showMessage({ text: `Updated  ${newName}`, level: 'info' })
        setNewName('')
        setNewNumber('')
      } catch (error) {
        showMessage({ text: `Error ${error.response.data.error}`, level: 'error' })
      }
    }
  }

  const retrievePhonebook = () => {
    const loadData = async () => {
      const result = await phoneBookService.getAll()
      setPersons(result)
    }
    loadData()
  }

  useEffect(retrievePhonebook, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      {persons.length > 0 && <Filter value={newFilter} updateFilter={() => setNewFilter(event.target.value)} />}

      <h2>Add a new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewName={() => setNewName(event.target.value)}
        handleNewNumber={() => setNewNumber(event.target.value)}
        handleSubmit={handleSubmit} />

      {persons.length > 0 && <h2>Numbers</h2>}
      <Persons newFilter={newFilter} persons={persons} handleDelete={deletePerson} />

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