const PersonForm = ({ newName, handleNewName, newNumber, handleNewNumber, handleSubmit}) => {
  return (
      <form id='personForm'>
          <div>Name: <input id='newName' value={newName} onChange={handleNewName} /></div>
          <div>Number: <input id='newNumber' value={newNumber} onChange={handleNewNumber} /></div>
          <div><button onClick={handleSubmit} type="submit">add</button></div>
      </form>
  )
}

export default PersonForm