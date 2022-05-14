import React from 'react';
import s from './Card.module.css';

function Card({max,min,name,img,onClose}) {
  return (
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
  )
}

export default Card