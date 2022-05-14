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
  width: 25vw;
  ${center}
`;

function Card({max,min,name,img,onClose}) {
  return (
    <CardStyle>
      <article className={s.fondo}>
          <button onClick={onClose}>X</button>
          <h2>{name}</h2>
          <h3>Min</h3>
          {min}
          <h3>Max</h3>
          {max}
          <figure>
              <img src={`http://openweathermap.org/img/wn/${img}@2x.png`} alt="weather img" />
          </figure>
      </article>      
    </CardStyle>

  )
}

export default Card