import { Link } from "react-router-dom";



function CountryCard({ name, flag, population, region, capital ,data }) {
  return (
    <Link className="country-card" to={`/${name}`} state={data}>
    {/* <Link className="country-card" to={`/Country?name=${name}`}> (here we used query string so when wo click on the card the name of the country will be passed as queryString for countryPage and we can use this country name to fetch the data according to the country name but when we dynamic routing and input any random url then we will redirected to countryPage but we are not comming at this page using card click to the query string is null and it will gives us error 
    
    but when we use params given by react router then whatever we pass after colon (:) will be send as the value of params to countryPage in above we were passing this thing {`/Country?name=${name}`} but after the / colon is passed as params so we just have to pass this thing only {`/${name}`} ) */}
      
      <img src={flag} alt={name + " flag"} />
      <div className="card-text">
        <h3 className="card-title">{name}</h3>
        <p>
          <b>population: </b>
          {population}
        </p>
        <p>
          <b>region: </b>
          {region}
        </p>
        <p>
          <b>capital: </b>
          {capital}
        </p>
      </div>
    </Link>
  );
}
export default CountryCard;
