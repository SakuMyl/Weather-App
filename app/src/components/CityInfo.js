import React from 'react';
import MainInfoBlock from './MainInfoBlock';
import ForecastCollection from './ForecastCollection';

const CityInfo = ({city}) => {
    console.log(city)
    return (
        <>
        <div className='CityInfoContainer'>
            <div>
            <MainInfoBlock
                name={city.name || ''}
                description={city.weather ? city.weather[0].main : ''}
                temperature={city.main.temp || ''}
                wind={city.wind.speed || ''}
                humidity={city.main.humidity || ''}
                precipitation={city.rain ? city.rain['3h'] : 0}
                icon={city.weather ? city.weather[0].icon : null}
                />
            </div>
            <ForecastCollection>

            </ForecastCollection>
        </div>
        </>
    )
}

export default CityInfo;