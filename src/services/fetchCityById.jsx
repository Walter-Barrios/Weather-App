function fetchCityById(cityId, setCity) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${apiKey}`)
    .then( response => response.json() )
    .then( resource => {
        if( resource.main !== undefined ) {
            const city = {
                min: Math.round(resource.main.temp_min),
                max: Math.round(resource.main.temp_max),
                img: resource.weather[0].icon,
                id: resource.id,
                wind: resource.wind.speed,
                temp: resource.main.temp,
                name: resource.name,
                weather: resource.weather[0].main,
                clouds: resource.clouds.all,
                latitud: resource.coord.lat,
                longitud: resource.coord.lon,                
            };
            setCity(city);
        }else {
            setCity(null);
        }
    });
}

export default fetchCityById;