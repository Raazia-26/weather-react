import React, { useState } from "react";
import axios from "axios";

export default function Weather() {
  const [city, setCity] = useState("");
  const [msg, setMsg] = useState({});
  const [loaded, setLoaded] = useState(false);

  function showTemp(response) {
    setLoaded(true);
    setMsg({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description,
    });
  }

  function getCityName(event) {
    event.preventDefault();
    let apiKey = "502dc8f7ae36e57af1974e18d16a86f8";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiurl).then(showTemp);
  }

  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={getCityName}>
      <input
        type="text"
        placeholder="Enter name of city..."
        onChange={updateCity}
      />
      <button type="Submit">Search</button>
    </form>
  );

  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li>Temperature: {msg.temperature}°C</li>
          <li>Wind: {msg.wind} km/h</li>
          <li>Humidity {msg.humidity}%</li>
          <li>
            <img src={msg.icon} alt={msg.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
