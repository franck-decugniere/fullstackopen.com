import PropTypes from 'prop-types'
import { useState } from 'react'

/*
Application life-cycle:
- App is executed
- Uses useState hook to create the application state
- On button click, event handler changes the state and causes the component (and child) to re-render
*/

// Array function (ES6) assigned to constant variable App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const age = 49
  console.log("App render")

  const people = ['Rowe', 'Prevost', 'Gare'];

  const peopleLis = people.map((person, i) =>
    <li key={'person_' + i}>{person}</li>
  );

  return (
    <div>
      <Hello name='Franck' age={age} />
      <hr />
      <p>It is {now.toString()}</p>
      <p>
        {a} + {b} = {a + b}
      </p>
      <ul>
        {peopleLis}
      </ul>
      <hr />
      <Counter initialValue={0} />
      <hr />
      <EventHandling />
    </div>
  )

}
/*
function AppFunctionDeclaration() {
  return (
    <div>Hello AppFunctionDeclaration</div>
  )
}

const AppFunctionExpression = function() {
   return (
   <div>Hello AppFunctionExpression</div>
  )
}*/


const Hello = ({ name, age }) => {
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>Hello {name}, you are {age} years old</p>
      <p>So you were probably born in {bornYear()}</p>
    </div>

  )
}
Hello.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

const Counter = ({ initialValue }) => {
  console.log("Counter render")
  const [counter, setCounter] = useState(initialValue)
  // counter : state variable to retain data between renders
  // setCounter : update state variable & trigger React to re-render the component
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  return (
    <div>{counter}</div>
  )
}

const EventHandling = () => {
  console.log("EventHandling render")
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)

  return (
    <div>
      <Button text='Plus' onClick={increaseByOne} />
      <Button text='Minus' onClick={decreaseByOne} />
      <Button text='Reset' onClick={setToZero} />
      <Display counter={counter} />
    </div>
  )
}

const Display = ({ counter }) =>
  <div>{counter}</div>
  
const Button = ({ onClick, text }) =>
    <button onClick={onClick}>
      {text}
    </button>

export default App