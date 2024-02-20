import PropTypes from 'prop-types'


// Array function (ES6) assigned to constant variable App
const App = () =>  {
  const now = new Date()
  const a = 10
  const b = 20
  const age = 49
  console.log(now, a+b)

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleLis = people.map((person,i) =>
  <li key={'person_' + i}>{person}</li>
);

  return  (
    <div>
      <Hello name='Franck' age={age}/>
      <p>It is {now.toString()}</p>
      <hr/>
      <p>
        {a} + {b} = {a + b}
      </p>
      <ul>
        {peopleLis}
      </ul>
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

export default App