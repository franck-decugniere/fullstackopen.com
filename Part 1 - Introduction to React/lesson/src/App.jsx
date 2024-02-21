import PropTypes from 'prop-types'
import { useState } from 'react'



// Array function (ES6) assigned to constant variable App
const App = () => {
  const now = new Date()
  const a = 10
  const b = 20
  const age = 49
  console.log(now, a + b)

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
  const [counter, setCounter] = useState(0)
  const increaseByOne = () => setCounter(counter + 1)
  const setToZero = () => setCounter(0)

  return (
    <div>


      <Button text='Plus' onClick={increaseByOne} />
      <Button text='Reset' onClick={setToZero} />
      <DisplayCounter counter={counter} />
    </div>
  )
}

const DisplayCounter = (props) => {
  return (
    <div>{props.counter}</div>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default App