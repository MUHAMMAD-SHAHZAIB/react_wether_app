import React, { useEffect, useState } from "react";
import "./WetherApp.css";
const WetherData = ({ TempData }) => {
  const { cityName, country, main, speed, sunset, temp, humidity, pressure } =
    TempData;
  // usestate declear for update the icons
  const [weatherState, setWeatheState] = useState("");
  console.log(main)
  useEffect(() => {
    if (main) {
      switch (main) {
        case "Clouds":
          setWeatheState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatheState("wi-fog");
          break;
        case "Clear":
          setWeatheState("wi-day-sunny");
          break;
        case "Mist":
          setWeatheState("wi-dust");
          break;

        default:
          setWeatheState("wi-day-sunny");
          break;
      }
    }
  }, [main]);

  // converting the second into time
  let sec = sunset;
  let date = new Date(sec * 1000);
  let timeStr = `${date.getHours()} : ${date.getMinutes()}`;
  return (
    <>
      <article className="widget">
        <div className="weatherIcon">
          <i className="wi wi-day-sunny"></i>
        </div>
        <div className="weatherInfo">
          <div className="temperature">
            <span>{temp} &deg;</span>
          </div>

          <div className="description">
            <div className="weatherCondition">sunny</div>
            <div className="place">
              {cityName},{country}
            </div>
          </div>
        </div>
        <div className="date">{new Date().toDateString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p className="">
               
                 <i className={`wi wi-cloud`}></i>

              </p>
              <p className="extra-info-leftside">
                {timeStr} <br /> sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p className="">
                <i className="wi wi-humidity"></i>
              </p>
              <p className="extra-info-leftside">
                {humidity}
                <br /> Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p className="">
                <i className="wi wi-rain"></i>
              </p>
              <p className="extra-info-leftside">
                {pressure} <br /> Pressure
              </p>
            </div>
            <div className="two-sided-section">
              <p className="">
                <i className="wi wi-strong-wind"></i>
              </p>
              <p className="extra-info-leftside">
                {speed} <br /> Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default WetherData;
