import React, { useState, useEffect } from 'react';
import TopBar from './components/TopBar';
import Header from './components/Header';
import CityInfo from './components/CityInfo';
import key from './apikey.json';
import axios from 'axios';
import './App.css';

const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${key}&units=metric&lang=fi`

const App = () => {
  const cityIds = [
    660129, // Helsinki
    655195, // Jyväskylä
    650225, // Kuopio
    634963 // Tampere
  ];
  const [cityData, setCityData] = useState([]);
  const [visibleCities, setVisibleCities] = useState(cityIds);

  const fetchCities = () => {
    const promises = cityIds.map(id => {
      return axios.get(`${apiUrl}&id=${id}`)
    })
    return Promise.all(promises).then(response => {
      return setCityData(response.map(obj => obj.data))
    })
  }

  useEffect(fetchCities, []);

  const handleDropdown = (event) => {
    setVisibleCities(event.target.value);
  }
  console.log(cityData)
  
  return (
    <div className='App'>
      <TopBar />
      <Header />
      <div className='CitiesInfoContainer'>
        <div className='DropdownContainer'>
          <select name='cities' className='Dropdown' onChange={handleDropdown}>
            <option value={cityIds}>All</option>
            {cityData.filter(city => cityIds.includes(city.id)).map(city => (
              <option value={[city.id]} key={city.id}>{city.name}</option>
              ))
            }
          </select>
        </div>
        {
          cityData.length ? 
          cityData.filter(city => visibleCities.includes(city.id)).map(city => {
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
