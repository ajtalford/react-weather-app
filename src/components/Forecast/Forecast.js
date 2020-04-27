import React, { useState } from "react";
import Current from "../Current/Current";
import classes from "./Forecast.module.css";
// import React from "react";

const Forecast = () => {
  let [city, setCity] = useState("");
  let [unit, setUnit] = useState("imperial");
  let [responseObj, setResponseObj] = useState({});
  const uriEncodedCity = encodeURIComponent(city);

  let [error, setError] = useState(false);
  let [loading, setLoading] = useState(false);

  // ///////////////////////////
  const appLink = {
    key: "1e50be9c3ec91c85e676018abdc6cc13",
    path: "https://api.openweathermap.org/data/2.5/",
  };
  // ////////////////////////////
  // appid=1e50be9c3ec91c85e676018abdc6cc13
  // let url = `${appLink.path}weather?q=${zipCode}&units=imperial&appid=${appLink.key}`;
  // let apiKey = "1e50be9c3ec91c85e676018abdc6cc13";

  function getWeather(e) {
    e.preventDefault();

    if (city.length === 0) {
      return setError(true);
    }

    // Clear state in preparation for new data
    setError(false);
    setResponseObj({});

    setLoading(true);

    // let uriEncodedCity = encodeURIComponent(city);

    // weather data fetch function
    fetch(
      // `https://api.openweathermap.org/data/2.5/weather?units=${unit}&q=${uriEncodedCity}&appid=${apiKey}`
      `${appLink.path}weather?units=${unit}&zip=${uriEncodedCity}&appid=${appLink.key}`
      // `${appLink.path}weather?q=${zipCode}&units=imperial&appid=${appLink.key}`
    )
      .then((response) => response.json())
      .then((response) => {
        if (response.cod !== 200) {
          throw new Error();
        }
        setResponseObj(response);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        console.log(err.message);
      });
    // .then(function (response) {
    //   return response.json();
    // })
    // .then(function (data) {
    //   console.log(data);
    // })
    // .catch(function () {
    //   console.log("Booo");
    // });
  }

  return (
    // JSX
    <div>
      <h2>Current Weather</h2>
      {/* <button onClick={getWeather}>Get Weather</button> */}
      <form onSubmit={getWeather}>
        <input
          type="text"
          placeholder="Enter City"
          maxLength="50"
          className={classes.textInput}
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "imperial"}
            value="imperial"
            onChange={(e) => setUnit(e.target.value)}
          />
          Fahrenheit
        </label>
        <label className={classes.Radio}>
          <input
            type="radio"
            name="units"
            checked={unit === "metric"}
            value="metric"
            onChange={(e) => setUnit(e.target.value)}
          />
          Celcius
        </label>
        <button className={classes.Button} type="submit">
          Get Weather
        </button>
      </form>
      {/* <Current responseObj={responseObj} /> */}

      <Current
        responseObj={responseObj}
        error={error} //new
        loading={loading} //new
      />
    </div>
  );
};

export default Forecast;
