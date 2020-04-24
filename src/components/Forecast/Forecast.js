import React, { useState } from "react";
import Current from "../Current/Current";
// import React from "react";

const Forecast = () => {
  let [responseObj, setResponseObj] = useState({});

  function getWeather() {
    // weather data fetch function
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=London&appid=1e50be9c3ec91c85e676018abdc6cc13"
    )
      .then((response) => response.json())
      .then((response) => {
        setResponseObj(response);
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
      <button onClick={getWeather}>Get Weather</button>
      <Current responseObj={responseObj} />
    </div>
  );
};

export default Forecast;
