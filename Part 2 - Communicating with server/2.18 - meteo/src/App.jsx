import { useEffect, useState, useRef } from 'react'

function App() {
  const [country, setCountry] = useState('')

  let timeoutRef = useRef(null)

  useEffect( () => {
    clearTimeout(timeoutRef.current)    
    timeoutRef.current = setTimeout( () => 
    {
      console.log(`Fetch ${country}`)
      country && console.log('Axios')

    }
    , 500)

  }, [country])

  return (
    <>
    <h1>Find countries</h1>
    <input value={country} onChange={event => setCountry(event.target.value)}/>
    </>
  )
}

export default App
