import React from 'react';
import ForecastBlock from './ForecastBlock';
import { getSimpleForecastObj } from '../utils';

const ForecastCollection = ({cityId, forecasts}) => {
    return (
        <div className='ForecastCollection'>
            {forecasts.map((forecast, i) => {
                const forecastObj = getSimpleForecastObj(forecast);
                return <ForecastBlock key={`${cityId}-forecast-${i}`} forecast={forecastObj}/>;
            })}
        </div>
    );
}

export default ForecastCollection;