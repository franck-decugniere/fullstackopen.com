import { useEffect, useState } from 'react'
import countryService from './services/country'
import CountryList from './components/CountryList'

function App() {
  const [country, setCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [allCountriesFiltered, setAllCountriesFiltered] = useState([])
  
  useEffect(() => {
    countryService.getAllCountries().then(response => setAllCountries(response))
    console.log(allCountries)
  }, [])

  const handleCountryInput = (newCountry) => {
    setCountry(newCountry)
    const filteredCountryList = allCountries.filter(country => country?.name?.common.toUpperCase().includes(newCountry.toUpperCase()))
    console.log(filteredCountryList.length)
    setAllCountriesFiltered(filteredCountryList)
    console.log(filteredCountryList)
  }

  return (
    <>
      <h1>Find countries</h1>
      <input value={country} onChange={event => handleCountryInput(event.target.value)} />
      <CountryList allCountries={allCountriesFiltered} maxItems={10} />
    </>
  )
}
export default App
