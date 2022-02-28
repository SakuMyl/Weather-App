import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CityInfo from './components/CityInfo';
import key from './apikey.json';
import axios from 'axios';
import moment from 'moment';
import './App.css';

const currentWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&lang=fi`
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?appid=${key}&units=metric&lang=fi`

const App = () => {
  const cityIds = [
    660129, // Helsinki
    655195, // Jyväskylä
    650225, // Kuopio
    634963 // Tampere
  ];
  const [currentWeatherData, setCurrentWeatherData] = useState([]);
  const [forecastData, setForecastData] = useState([]);
  const [visibleCities, setVisibleCities] = useState(cityIds);
  const [time, setTime] = useState(moment().format('HH:mm'));

  const fetchCurrentWeather = () => {
    const promises = cityIds.map(id => {
      return axios.get(`${currentWeatherUrl}&id=${id}`)
    })
    return Promise.all(promises).then(response => {
      return setCurrentWeatherData(response.map(obj => obj.data))
    })
  }

  const fetchForecast = () => {
    const promises = cityIds.map(id => {
      return axios.get(`${forecastUrl}&id=${id}`)
    })
    return Promise.all(promises).then(response => {
      return setForecastData(response.map(obj => obj.data))
    })
  }

  useEffect(fetchCurrentWeather, []);
  useEffect(fetchForecast, []);
  //setInterval(fetchCities, 60000)

  setInterval(() => {
    const newTime = moment().format('HH:mm');
    if (newTime !== time) setTime(newTime);
  }, 1000)

  const handleDropdown = (event) => {
    setVisibleCities(event.target.value);
  }

  return (
    <div className='App'>
      <TopBar />
      <Header />
      <div className='CitiesInfoContainer'>
        <div className='DropdownContainer'>
          <select name='cities' className='Dropdown' onChange={handleDropdown}>
            <option value={cityIds}>Kaikki kaupungit</option>
            {currentWeatherData.filter(city => cityIds.includes(city.id)).map(city => (
              <option value={[city.id]} key={city.id}>{city.name}</option>
              ))
            }
          </select>
        </div>
        {
          currentWeatherData.length && forecastData.length ?
          Array.from(Array(currentWeatherData.length).keys()).filter(i => visibleCities.includes(cityIds[i])).map(i => {
            const currentWeather = currentWeatherData[i];
            const forecast = forecastData[i];
            return (
              <div key={currentWeather.id}>
                <CityInfo time={time} currentWeather={currentWeather} forecast={forecast} />
              </div>
            );
          }) :
          <div style={{textAlign: 'center', backgroundColor: 'white'}}>
            Fetching data...
          </div>
        }
      </div>
    </div>
  )
}

export default App;
