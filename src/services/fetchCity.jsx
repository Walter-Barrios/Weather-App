import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

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
                    MySwal.fire({
                        title: `${city.name}`,
                        text: 'That city is already found.',
                        icon: 'info',
                        confirmButtonText: 'Cool',
                        confirmButtonColor: 'yellow',
                        customClass: {
                            confirmButton: 'black'
                        },
                    })
                    return oldCities;
                }else {
                    return [...oldCities, city];
                }
            })
        }else {
            MySwal.fire({
                title: `"${city}"`,
                text: 'City not found.',
                icon: 'error',
                confirmButtonText: 'Ok',
                confirmButtonColor: 'yellow',
                customClass: {
                    confirmButton: 'black'
                },
            })
        }
    });
}

export default fetchCity;