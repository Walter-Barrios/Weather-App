import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import fetchCityById from './../../services/fetchCityById';
import s from './City.module.css';
import styled, { css } from 'styled-components';

const center = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const CityStyle = styled.div`
  width: 40rem;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  ${center}
  background-color: ${props=>props.backgroundColor || "white"};
  backdrop-filter: blur(5px);
  position: relative;
  margin: 10px auto;
`;

function grados(temp) {
    const kelvin = 273.15;
    if(temp > kelvin) {
      return `${parseInt(temp - 273.15)} °C`;
    }
    return `${temp} °C`;
  }

function City() {
    const [city, setCity] = useState();
    const { idCity } = useParams()

    useEffect( () => {
        fetchCityById(idCity, setCity);
    }, [idCity]);

    return (
        <CityStyle backgroundColor="cadetblue">
            {city === undefined ? <h2>Loading...</h2> : null}
            {city === null ? <h2>City not found.</h2> : null} 
            {city && (
                <>
                    <h2>{city.name}</h2>
                    <article className={s.clima}>
                        <div>
                            <h3>Temperature:</h3>
                            <p>{grados(city.temp)}</p>
                        </div>
                        <div>
                            <h3>Weather:</h3>
                            <p>{city.weather}</p>
                        </div>
                        <div>
                            <h3>Wind:</h3>
                            <p>{city.wind} km/h</p>
                        </div>
                    </article>
                    <article className={s.clima}>
                        <div>
                            <h3>Clouds:</h3>
                            <p>{city.clouds}</p>
                        </div>
                        <div>
                            <h3>Latitude:</h3>
                            <p>{city.latitud}º</p>
                        </div>
                        <div>
                            <h3>Longitude:</h3>
                            <p>{city.longitud}º</p>
                        </div>
                    </article>
                </>
            )}
        </CityStyle>
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