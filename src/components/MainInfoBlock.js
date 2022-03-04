import React from 'react';
import moment from 'moment';
import '../App.css';

const MainInfoBlock = ({time, name, description, icon, temperature, wind, humidity, rain}) => {
    return (
        <div className='MainInfoBlock'>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <span className='CityName'>{name}</span>
                    <span className='WeatherDescription'>{description}</span>
                </div>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    {icon ? <img width={80} src={`http://openweathermap.org/img/wn/${icon}@2x.png`}/> : null}
                    <span className='Temperature'>{Math.round(temperature)} °C</span>
                </div>
            </div>
            <div style={{display: 'flex', justifyContent: 'space-between'}}>
                <div style={{alignSelf: 'flex-end'}}>
                    <div><span className='Date'>{moment().format('MMM Do')}</span></div>
                    <div><span className='Clock'>{time}</span></div>
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-end'}}>
                    <div>
                        <span className='WeatherDescription'>Wind: {wind} m/s</span>
                    </div>
                    <div>
                        <span className='WeatherDescription'>Humidity: {humidity} %</span>
                    </div>
                    <div>
                        <span className='WeatherDescription'>Precipitation (3 h): {rain} mm</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainInfoBlock;