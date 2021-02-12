import "./styles.css";
import City from "./components/City";
import Weather from "./components/Weather";
import { React, useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");
  const [error, setError] = useState("");
  function getWeather() {
    if (!city) {
      setError("Please enter city name");
    } else {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=4c496af33d732297c30b641b3b235e47`
      )
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            throw new Error("Enter correct city name");
          }
        })
        .then((data) => setWeather(Math.floor(data.main.temp) - 273))

        .catch((error) => {
          console.log(error);
          setError("Enter correct city name");
        });
    }
  }
  return (
    <div className="App">
      <City
        city={city}
        setCity={setCity}
        getWeather={getWeather}
        setWeather={setWeather}
        error={error}
        setError={setError}
      />
      <Weather weather={weather} setWeather={setWeather} />
    </div>
  );
}
