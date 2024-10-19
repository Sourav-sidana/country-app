import { useLocation, useParams } from "react-router-dom";
import styles from "./component/CountryPage.css";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { useOutletContext } from "react-router-dom";
import { useContext } from "react";
import { themeContext } from "./contexts/ThemeContext";
function CountryPage() {
  console.log(themeContext)
  const [countryData, setcountryData] = useState({
    name: '',
    nativeName: '',
    population: 0,
    region: '',
    topLevelDomain: [],
    subregion: '',
    currencies: '',
    languages: '',
    capital: '',
    flag: '',
    borders: []
  });
  // const [isdark] = useOutletContext()
  const  [isdark] = useContext(themeContext)
  console.log(isdark)
  const [notFound, setNotFound] = useState(false);
  // const urlParams = new URLSearchParams(location.search);
  // let countryName = urlParams.get("name");

  const params = useParams()
  const {state} = useLocation()
  console.log(state)
  
  const countryName = params.Country ;
  console.log(countryName);

  function updateCountaryDate(data){

    setcountryData({
      name: data.name.common,
      nativeName: Object.values(data.name.nativeName)[0].common,
      population: data.population,
      region: data.region,
      topLevelDomain: data.tld,
      subregion: data.subregion,
      currencies: Object.values(data.currencies)[0].name,
      languages: Object.values(data.languages).join(","),
      capital: data.capital[0],
      flag: data.flags.svg,
      borders: [],
    });
    if(!data.borders){
      data.borders = []
    }
    const borderPromises = data.borders.map((border) =>
      fetch(`https://restcountries.com/v3.1/alpha/${border}`)
        .then((res) => res.json())
        .then(([borderCountry]) => borderCountry.name.common)
    );
    // console.log(borderPromises)

    Promise.all(borderPromises).then((borderNames) => {
      setcountryData((prev) => ({
        ...prev,
        borders: borderNames
      }));
    });

  }
  useEffect(() => {

if(state){

  updateCountaryDate(state)
  return
}


    fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
      .then((res) => res.json())
      .then(([data]) => {
        //   console.log(countryData.currencies)
        updateCountaryDate(data)
        console.log(data);
     
      })
      .catch((err) => {
        console.log(err)
        setNotFound(true);
      });
  }, [countryName]);
  // console.log()
  if (notFound) {
    return <div>country not found</div>;
  }
  
  
  return countryData === null ? (
    "loading..."
  ) : (
    <main id="main" className={`${isdark ? "dark" : " "}`}>
      <div className="button">
      <span
        onClick={() => {
          history.back();
        }}
      className="back">
        back
      </span>
      </div>
      <div className="main">
        <div className="left">
          <img src={countryData.flag} alt={countryData.name + " flag"} />
        </div>
        <div className="right">
          <h2>{countryData.name}</h2>
          <div className="details">
            <div className="details1">
              <p>
                <b>Native Name:</b>
                {countryData.nativeName}
                <b className="native"></b>
              </p>
              <p>
                <b>Population:</b>
                {new Intl.NumberFormat("en-IN").format(countryData.population)}
              </p>
              <p>
                <b>Region:</b>
                {countryData.region}
              </p>
              <p>
                <b>Sub Region:</b>
                {countryData.subregion}
              </p>
              <p>
                <b>Capital:</b>
                {countryData.capital}
              </p>
            </div>
            <div className="details2">
              <p>
                <b>Top Level Domain:</b>
                {countryData.topLevelDomain}
              </p>
              <p>
                <b>Currencies:</b>
                {countryData.currencies}
              </p>
              <p>
                <b>Language:</b>
                {countryData.languages}
                
              </p>
            </div>
          </div>

          
  {countryData.borders && countryData.borders.length > 0 ? <div className="border">
    <p><b>Border Countries</b></p> 
   { countryData.borders.map((border) =>
  
     { 
      return (<Link to={`/${border}`} key={border} >{ border} &nbsp;</Link>)}
      
    )}
    
  </div> : ("")}

        </div>
      </div>
    </main>
  );
}
export default CountryPage;
