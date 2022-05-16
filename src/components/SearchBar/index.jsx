import React, { useState } from 'react';
import s from './SearchBar.module.css';

function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  return (
    <form className={s.header} onSubmit={(e)=> {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }}>
      <div className={s.contenedor}>
        <input 
          className={s.input} 
          type="text" 
          placeholder='City...' 
          onChange={e => setCity(e.target.value)}
          value={city}
        />
        <button 
          type='submit' 
          className={s.boton} 
          title="Add a city."
        >Search</button>
      </div>
    </form>
  )
}

export default SearchBar