import { useState, useEffect } from "react"

const CountryList = ({ allCountries, maxItems }) => {
    const nbItem = allCountries.length
    const tooManyItems = nbItem > maxItems
    const [showCountry, setShowCountry] = useState(null)

    useEffect(() => setShowCountry(null), [allCountries])
    
    console.log("CountryList", allCountries)
    if (showCountry) {
        console.log("Show country", showCountry)
        return (<Country country={showCountry}/>)
    }

    if (nbItem == 1) {
        console.log(allCountries[0])
         return (<Country country={allCountries[0]}/>)
    }

    if (tooManyItems) {
        return (<div>Too many matches, specify another filter</div>)
    }

    const showChildren = (country) => {
        setShowCountry(country)
    }

    return (
        <>
            {
                allCountries.map(item => {
                    // console.log("item", item)
                    return <div key={item.name.ccn3}>{item.name.common}<button onClick={() => showChildren(item)}>Show</button></div>
                })
            }
        </>
    )
}

const Country = ({ country }) => {
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
    </>
    )
}

export default CountryList