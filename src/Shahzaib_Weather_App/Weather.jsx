import React, { useEffect, useState } from "react";
import "./Weather.css";
import WeatherCard from "./WeatherCard";

const Weather = () => {
  // this state create for the input value search
  const [WeatherData, setWeatherData] = useState("KARAK");
  const [weatherObject, setWeatherObject] = useState({});

  

  // data get form api
  const GetDataFromApi = async () => { 
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${WeatherData}&units=metric&appid=d396a99c9c6f826dcf007f3a764a5ae6`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      const { main } = data.weather[0];
      const { temp, humidity, pressure } = data.main;
      const { speed } = data.wind;
      const { country, sunset } = data.sys;
      const { name } = data;
      // create the object for to get the data into api
      const WeatherObjectData = {
        name,
        country,
        sunset,
        speed,
        pressure,
        humidity,
        temp,
        main,
      };
      //WeatherObjectDate add to weather object state.
      setWeatherObject(WeatherObjectData);
    } catch (error) {
      console.log("something error check your code ");
    }
  };

  // for bydefault city name set karak
  useEffect(() => {
    GetDataFromApi();
  }, []);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search...."
            autoFocus
            id="search"
            className="searchTerm "
            value={WeatherData}
            onChange={e => setWeatherData(e.target.value)}
          />
          <button
            className="searchButton"
            type="search"
            onClick={GetDataFromApi}
          >
            Search
          </button>
        </div>
      </div>
      <WeatherCard weatherObject={weatherObject} />
    </>
  );
};

export default Weather;
