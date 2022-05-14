import React from 'react'

function Card({max,min,name,img,onClose}) {
  return (
    <article>
        <button onClick={onClose}>Cerrar</button>
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