import React from 'react';
import MainInfoBlock from './MainInfoBlock';
import ForecastCollection from './ForecastCollection';

const CityInfo = ({time, currentWeather, forecast}) => {
    return (
        <>
        <div className='CityInfoContainer'>
            <div>
            <MainInfoBlock
                time={time}
                name={currentWeather.name || ''}
                description={currentWeather.weather ? currentWeather.weather[0].main : ''}
                temperature={currentWeather.main.temp || ''}
                wind={currentWeather.wind.speed || ''}
                humidity={currentWeather.main.humidity || ''}
                precipitation={currentWeather.rain ? currentWeather.rain['3h'] : 0}
                icon={currentWeather.weather ? currentWeather.weather[0].icon : null}
                />
            </div>
            <ForecastCollection forecast={forecast}/>
        </div>
        </>
    )
}

export default CityInfo;