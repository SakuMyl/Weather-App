import moment from 'moment';

export const getSimpleForecastObj = (forecast) => {
    return {
        time: moment(forecast.dt_txt).format('HH:mm'),
        icon: forecast.weather[0].icon,
        temperature: forecast.main.temp,
        wind: forecast.wind.speed,
        humidity: forecast.main.humidity,
        rain: forecast.rain ? forecast.rain['3h'] : 0
    };
};

export const getSimpleWeatherObj = (cityWeatherObj) => {
    return {
        time: moment().format('HH:mm'),
        name: cityWeatherObj.name,
        description: cityWeatherObj.weather[0].main,
        icon: cityWeatherObj.weather[0].icon,
        temperature: cityWeatherObj.main.temp,
        wind: cityWeatherObj.wind.speed,
        humidity: cityWeatherObj.main.humidity,
        rain: cityWeatherObj.rain ? cityWeatherObj.rain['3h'] : 0
    }
}