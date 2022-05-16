function fetchCity(city, setCities) {
    const apiKey = process.env.REACT_APP_API_KEY;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`,)
    .then((response) => response.json())
    .then((resource) => {
        if(resource.main !== undefined) {
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
            setCities( oldCities => {
                if(oldCities.some(c => c.name === city.name)) {
                    alert('That city is already found.');
                    return oldCities;
                }else {
                    return [...oldCities, city];
                }
            })
        }else {
            alert('City not found.');
        }
    });
}

export default fetchCity;