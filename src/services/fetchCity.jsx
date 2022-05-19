import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function fetchCity(city, setCities) {

    if(city) {
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
                            customClass: {
                               confirmButton: 'black'
                            },
                            title: `${city.name}`,
                            text: 'That city is already found.',
                            icon: 'info',
                            confirmButtonText: `<span style="color:black">Cool<span>`,
                            confirmButtonColor: 'yellow'
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
                    confirmButtonText: `<span style="color:black">Ok<span>`,
                    confirmButtonColor: 'yellow'
                })
            }
        });
    }else {
        MySwal.fire({
            title: 'You must enter a city.',
            icon: 'warning',
            confirmButtonText: `<span style="color:black">I get it<span>`,
            confirmButtonColor: 'yellow'
        })
    }
}

export default fetchCity;