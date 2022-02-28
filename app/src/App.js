import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CityInfo from './components/CityInfo';
import key from './apikey.json';
import axios from 'axios';
import './App.css';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric`

const App = () => {
  const cityIds = [
    660129, // Helsinki
    655195, // Jyväskylä
    650225, // Kuopio
    634963 // Tampere
  ];
  const [cityData, setCityData] = useState([]);

  const fetchCities = () => {
    const promises = cityIds.map(id => {
      return axios.get(`${apiUrl}&id=${id}`)
    })
    return Promise.all(promises).then(response => {
      return setCityData(response.map(obj => obj.data))
    })
  }

  useEffect(fetchCities, []);
  return (
    <div className='App'>
      <TopBar />
      <Header />
      <div className='CitiesInfoContainer'>
      {
        cityData.length ? 
        cityData.map(city => {
          console.log(city);
          return (
            <div key={city.id}>
              <CityInfo city={city} />
            </div>
          )
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
