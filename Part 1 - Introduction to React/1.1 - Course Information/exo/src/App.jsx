const Header = (props) => {
  return (<h1>{props.title}</h1>)
}

const Content = ({items}) => {
  return (
    items.map((item, i) => <Part key={i} title={item.title} nbEx={item.nbEx} /> )
  )
};

const Part = (props) => {
  return (
    <p>{props.title} {props.nbEx}</p>
  )
}

const Total = ({ items }) => {
  return (
    <p>Number of exercises {items.map(item => item.nbEx).reduce((acc, nb) => acc + nb)}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const allItems = [
    { title: part1, nbEx:exercises1 },
    { title: part2, nbEx: exercises2 },
    { title: part3, nbEx: exercises3 }
  ]

  return (
    <div>
      <Header title={course}/>
      <Content items={allItems}/>
      <Total items={allItems} />
    </div>
  )
}

export default App
