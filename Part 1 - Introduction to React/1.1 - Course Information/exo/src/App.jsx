import { useState } from 'react'

const Header = ({title}) => {
  return (<h1>{title}</h1>)
}

const Content = ({items}) => {
  return (
    <div>
      {items.map((item, i) => <Part key={i} name={item.name} exercises={item.exercises} /> )}
    </div>
  )
};

const Part = ({name, exercises}) => {
  return (
    <p>{name} {exercises}</p>
  )
}

const Total = ({items}) => {
  return (
    <p>Number of exercises {items.map(item => item.exercises).reduce((acc, nb) => acc + nb)}</p>
  )
}

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useState(initialValue)
  // counter : state variable to retain data between renders
  // setCounter : update state variable & trigger React to re-render the component
  setTimeout(
    () => setCounter(counter + 1),
    1000
  )
  console.log('rendering...', counter)
  return (
    <div>{counter}</div>
  )
}


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Header title={course.name}/>
      <Content items={course.parts}/>
      <Total items={course.parts} />
      <Counter initialValue={0}/>
    </div>
  )
}

export default App
