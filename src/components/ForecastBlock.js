import React from 'react';
import '../App.css';

const ForecastBlock = ({forecast}) => {
    return (
        <div className='ForecastBlock'>
            <div className='ForecastBlockUpper'>
                <span className='Clock'>{forecast.time}</span>
                <img width={60} src={`http://openweathermap.org/img/wn/${forecast.icon}@2x.png`}/>
                <span className='SmallTemperature'>{Math.round(forecast.temperature)} °C</span>
            </div>
            <div className='ForecastBlockLower'>
                <span className='SmallWeatherInfo'>{forecast.wind} m/s</span>
                <span className='SmallWeatherInfo'>{forecast.humidity} %</span>
                <span className='SmallWeatherInfo'>{forecast.rain} mm</span>
            </div>
        </div>
    )
};

export default ForecastBlock;