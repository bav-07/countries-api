import { useState, useEffect } from "react";
import CountryComponent from "../components/CountryComponent";

const CountryContainer = () => {

    const[countries, setCountries] = useState([]);

    useEffect(() => {

        fetch("https://restcountries.com/v3.1/all")
        .then(response => response.json())
        .then(data => setCountries(data))

    }, [])


    const countryNames = countries.map((country) => country.name.common);

    console.log(countryNames);

    return(

        <>
            {
            countries ? countries.map(function(country) { 
                return <CountryComponent country={country.name.common}/>
            }) : "No countries found"
            }
        </>

    )

}

export default CountryContainer;