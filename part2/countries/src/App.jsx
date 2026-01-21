import axios from "axios";
import { useEffect, useState } from "react";

const api_key = import.meta.env.VITE_SOME_KEY;
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api";

function App() {
  const [countries, setCountries] = useState([]);
  const [weather, setWeather] = useState(null);
  const [searchCountryByName, setSearchCountryByName] = useState("");

  const handleCountrySearch = (event) => {
    setSearchCountryByName(event.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.common
      .toLowerCase()
      .includes(searchCountryByName.toLowerCase())
  );
  const capital =
    filteredCountries.length === 1 ? filteredCountries[0].capital[0] : null;

  // UseEffect for getting all the countries
  useEffect(() => {
    axios.get(`${baseUrl}/all`).then((response) => {
      setCountries(response.data);
    });
  }, []);

  //Weather API UseEffect
  useEffect(() => {
    if (!capital) {
      setWeather(null);
      return;
    }
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${api_key}&units=metric`
      )
      .then((response) => {
        setWeather(response.data);
      });
  }, [capital]);

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
        {filteredCountries.length === 1 &&
          (() => {
            const country = filteredCountries[0];

            return (
              <div>
                <h1>{country.name.common}</h1>
                <p>
                  Capital {country.capital[0]} <br />
                  Area {country.area}
                </p>
                <h2>Languages</h2>
                <ul>
                  {Object.values(country.languages).map((language) => (
                    <li key={language}>{language}</li>
                  ))}
                </ul>
                <img
                  src={country.flags.png}
                  alt={`flag of ${country.name.common}`}
                />
                {weather && (
                  <>
                    <h2>Weather in {country.capital[0]}</h2>
                    <p>Temperature {weather.main.temp} °C</p>
                    <img
                      src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
                      alt={weather.weather[0].description}
                    />
                    <p>Wind {weather.wind.speed} m/s</p>
                  </>
                )}
              </div>
            );
          })()}
      </div>
    </div>
  );
}

export default App;
