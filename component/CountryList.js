import React from "react";
import CountryCard from "./CountryCard.js";
// import CountriesData from "./CountriesData.js";

// import { useOutletContext } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Shimmer from "./Shimmer";
export default function countryList({ query }) {
 

const [CountriesData ,setCountriesdata] = useState([])

  useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all').then((res)=> res.json()).then((data)=>{
    
      setCountriesdata(data)
     
  
  })
  },[])
// console.log (CountriesData)
if(CountriesData.length === 0 ){
  return (<Shimmer/>)
}
    // console.log(query );

  return (
    <div className="contries-container">
      {CountriesData.filter((country) => country.name.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query)
      ).map((country) => {
        return (
          <CountryCard
            key={country.name.common}
            name={country.name.common}
            flag={country.flags.svg}
            population={new Intl.NumberFormat("en-IN").format(
              country.population
            )}
            region={country.region}
            capital={country.capital}
            data={country}
          />
        );
      })}
    </div>
  );
}
