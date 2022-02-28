import React from 'react';
import MainInfoBlock from './MainInfoBlock';

const CityInfo = ({city}) => {
    console.log(city)
    return (
        <MainInfoBlock
            name={city.name || ''}
            description={city.weather ? city.weather[0].main : ''}
            temperature={city.main.temp || ''}
            wind={city.wind.speed || ''}
            humidity={city.main.humidity || ''}
            precipitation={city.rain ? city.rain['3h'] : ''}
        />
        
    )
}

export default CityInfo;