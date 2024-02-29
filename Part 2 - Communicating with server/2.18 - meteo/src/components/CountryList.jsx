const CountryList = ({ allCountries, maxItems }) => {
    const nbItem = allCountries.length
    const tooManyItems = nbItem > maxItems

    if (nbItem == 1) {
        const country = allCountries[0]
        let languages = '';
        for (let value of Object.values(country.languages)) {
            languages += value
        }
        console.log("l", languages)
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
            <img src={ country.flags.png} />
        </>
        )
    }

    if (tooManyItems) {
        return (<div>Too many matches, specify another filter</div>)
    }

    return (
        <>
            {
                allCountries.map(item => {
                    // console.log("item", item)
                    return <div key={item.name.ccn3}>{item.name.common}</div>
                })
            }
        </>
    )
}

export default CountryList