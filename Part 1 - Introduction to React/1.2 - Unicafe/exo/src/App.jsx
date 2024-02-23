import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)

  const handleGood = () => { 
    setGood(good +1 )
    setAll(all+1)
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1)
    setAll(all + 1)
  }

  const handleBad = () => {
    setBad(bad + 1)
    setAll(all + 1)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleGood}>good</Button>
      <Button handleClick={handleNeutral}>neutral</Button>
      <Button handleClick={handleBad}>bad</Button>
      <h1>statistics</h1>
      <Statistics allResults={{good:good, neutral:neutral, bad:bad, all:all}}/>
      
    </div>
  )
}

const Button = ({ handleClick, children}) => {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

const Statistics = ({allResults}) => {
  return (
    <>
    { allResults.all > 0 ? 
    <table>
      <StatisticLine text='good' value={allResults.good}/>
      <StatisticLine text='neutral' value={allResults.neutral} />
      <StatisticLine text='bad' value={allResults.bad} />
      <StatisticLine text='all' value={allResults.all} />
      <StatisticLine text='average' value={(allResults.good - allResults.bad) / allResults.all} />
      <StatisticLine text='positive' value={`${(allResults.good / allResults.all)*100} %`}/>
      </table> 
      : 
      <p>No feedback given</p>
    }
    </>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr><td>{text}</td><td> {value}</td></tr>
  )
}

export default App
