import React from 'react';
import s from './Card.module.css';
import styled, { css } from 'styled-components';

const center = css`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const CardStyle = styled.div`
  width: 20rem;
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

function Card({max,min,name,img,onClose}) {
  return (
    <CardStyle backgroundColor="cadetblue">
      {/*<article className={s.fondo} >*/}
      <button style={{
        width:'25px', 
        height:'25px', 
        background:'orange', 
        borderRadius: '5px',
        position: 'absolute',
        right: 0}} onClick={onClose}>X</button>
      <h2>{name}</h2>      
      <article className={s.clima}>
        <div>
          <h3>Min</h3>
          <p>{grados(min)}</p>
        </div>   
        <div>
          <h3>Max</h3>
          <p>{grados(max)}</p>
        </div>
        <figure>
            <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather img" />
        </figure>
      {/* </article>       */}
      </article>
    </CardStyle>
  )
}

export default Card