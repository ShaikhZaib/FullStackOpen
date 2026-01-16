import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchCountryByName, setSearchCountryByName] = useState("");

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

  const handleCountrySearch = (event) => {
    setSearchCountryByName(event.target.value);
  };

  useEffect(() => {
    axios.get(`${baseUrl}/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchCountryByName.toLowerCase())
  );

  const country = filteredCountries[0];

  return (
    <div>
      <div>
        Find Countries{" "}
        <input onChange={handleCountrySearch} value={searchCountryByName} />
        {filteredCountries.length > 10 && (
          <p>Too many matches, specify another filter</p>
        )}
        {filteredCountries.length < 10 && filteredCountries.length > 1 && (
          <ul>
            {filteredCountries.map((country) => (
              <li key={country.cca3}>
                {country.name.common}{" "}
                <button
                  onClick={() => {
                    setSearchCountryByName(country.name.common);
                  }}
                >
                  show
                </button>{" "}
              </li>
            ))}
          </ul>
        )}
        {filteredCountries.length === 1 && (
          <div>
            <h1>{country.name.common}</h1>
            <p>
              {country.capital[0]} <br />
              area: {country.area}
            </p>{" "}
            <h2>Languages</h2>
            <ul>
              {Object.values(country.languages).map((language) => (
                <li key={language}>{language}</li>
              ))}
            </ul>
            <img
              src={country.flags.png}
              alt={`flag of  ${country.name.common}`}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
