import React from "react";

export default function City(props) {
    const idCity = props.match.params.idCity;
    const city = props.cities.find(c => c.id == idCity);
    return (
        <div>
            <div>
                <h2>{city.name}</h2>
                <div>
                    <div>Temperatura: {city.temp} ºC</div>
                    <div>Clima: {city.weather}</div>
                    <div>Viento: {city.wind} km/h</div>
                    <div>Cantidad de nubes: {city.clouds}</div>
                    <div>Latitud: {city.latitud}º</div>
                    <div>Longitud: {city.longitud}º</div>
                </div>
            </div>
        </div>
    )
}