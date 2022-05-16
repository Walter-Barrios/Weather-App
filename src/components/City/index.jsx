import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCityById from './../../services/fetchCityById';

function City() {
    const [city, setCity] = useState();
    const { idCity } = useParams()

    useEffect( () => {
        fetchCityById(idCity, setCity);
    }, [idCity]);

    return (
        <>
            {city === undefined ? <h2>Loading...</h2> : null}
            {city === null ? <h2>City not found.</h2> : null} 
            {city && (
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
            )}
        </>
    );
}

//#region 
// function City({city}) {
//     if(city) {
//         return (
//             <div>
//                 <div>
//                     <h2>{city.name}</h2>
//                     <div>
//                         <div>Temperatura: {city.temp} ºC</div>
//                         <div>Clima: {city.weather}</div>
//                         <div>Viento: {city.wind} km/h</div>
//                         <div>Cantidad de nubes: {city.clouds}</div>
//                         <div>Latitud: {city.latitud}º</div>
//                         <div>Longitud: {city.longitud}º</div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }else {
//         return (
//             <h2>City not found.</h2>
//         );
//     }
// }
//#endregion

export default City;