import { useState, useEffect } from "react"
import Country from "./Country"

const CountryList = ({ allCountries, maxItems }) => {
    const nbItem = allCountries.length
    const tooManyItems = nbItem > maxItems
    const [showCountry, setShowCountry] = useState(null)

    useEffect(() => setShowCountry(null), [allCountries])
    
    // console.log("CountryList", allCountries)

    if (showCountry) {
        // console.log("Show country", showCountry)
        return (<Country country={showCountry}/>)
    }

    if (nbItem == 1) {
        // console.log(allCountries[0])
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

export default CountryList