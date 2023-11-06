import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);

  const pollWeather = async (location) => {
    let url = 'http://api.openweathermap.org/data/2.5/weather?';
    // const apiKey = process.env.REACT_APP_WEATHER_API;

    const res = await fetch(url);
    if (res.ok) {
      const weatherData = await res.json();
      setWeather(weatherData);
    } else {
      alert("Check Weather API key!");
    }
  }

  useEffect(() => {
    navigator.geolocation?.getCurrentPosition(
      pollWeather,
      (err) => console.log(err),
      { timeout: 10000 }
    );
  }, []);

  let content = <div className='loading'>loading weather...</div>;

  if (weather) {
    const temp = (weather.main.temp - 273.15) * 1.8 + 32;
    content = (
      <div>
        <p>{weather.name}</p>
        <p>{temp.toFixed(1)} degrees</p>
      </div>
    );
  } else {
    content = (
      <div>
        Weather is currently unavailable. (Are Location Services enabled?)
      </div>
    );
  }

  return (
    <section className="weather-section">
      <h1>Weather</h1>
      <div className='weather'>
        {content}
      </div>
    </section>
  );
}

export default Weather;