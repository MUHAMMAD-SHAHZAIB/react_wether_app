import React, { useState, useEffect } from "react";
import WetherData from "./WetherData";
import "./WetherApp.css";

const WetherApp = () => {
  const [EnterCityName, setEnterCityName] = useState("Karak");
  const [TempData, setTempData] = useState({});

  const EventHanler = e => {
    setEnterCityName(e.target.value);
  };
  const getWeatherData = async () => {
    try {
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${EnterCityName}&units=metric&appid=d396a99c9c6f826dcf007f3a764a5ae6`;

      const res = await fetch(url);
  
      const data = await res.json();

      const { temp, humidity, pressure } = data.main;
      const { main } = data.weather[0];
      const { name: cityName } = data;
      const { sunset, country } = data.sys;
      const { speed } = data.wind;

      const WetherDataApi = {
        cityName,
        country,
        main,
        speed,
        sunset,
        temp,
        humidity,
        pressure,
      };

      setTempData(WetherDataApi);
      console.log(WetherDataApi);
    } catch (error) {
      console.log("error");
    }
  };

  // for by default value set in search box, it have page refersh then value have no remove
  useEffect(() => {
    getWeatherData();
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
            className="searchTerm   "
            onChange={EventHanler}
            value={EnterCityName}
           
          />
          <button
            className="searchButton"
            type="search"
            onClick={getWeatherData}
          >
            Search
          </button>
        </div>
      </div>
      return <WetherData TempData={TempData}/>
    </>
  );
};

export default WetherApp;
