import { useEffect } from 'react'
import meteoService from '../services/openMeteo'
import { useState } from 'react'

const Country = ({ country }) => {

    const [currentTemperature, setCurrentTemperature] = useState(null)
    
    useEffect(() => {
        meteoService.getCurrentTemperature(country.capitalInfo.latlng[0], country.capitalInfo.latlng[1])
            .then(response => {
                console.log("meteo",response)
                setCurrentTemperature(response)
            })
    }, [])

    console.log("Country", country)
    return (<>
        <h1>{country.name.common}</h1>
        <p>Capital {country.capital}</p>
        <p>Area {country.area}</p>
        <h2>Languages:</h2>
        <ul>
            {Object.values(country.languages).map(language => {
                return <li key={language}>{language}</li>
            })}
        </ul>
        <img src={country.flags.png} />
        <h2>Weather in {country.capital}</h2>
        <div>{currentTemperature?.current?.temperature_2m} {currentTemperature?.current_units?.temperature_2m}</div>
    </>
    )
}

export default Country