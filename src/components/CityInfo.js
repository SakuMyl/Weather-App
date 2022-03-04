import React from 'react';
import MainInfoBlock from './MainInfoBlock';
import ForecastCollection from './ForecastCollection';
import { getSimpleWeatherObj } from '../utils';

const CityInfo = ({time, currentWeather, forecasts}) => {
    const weatherObj = getSimpleWeatherObj(currentWeather)
    return (
        <>
            <div className='CityInfoContainer'>
                <MainInfoBlock time={time} {...weatherObj}/>
                <ForecastCollection forecasts={forecasts}/>
            </div>
        </>
    )
}

export default CityInfo;