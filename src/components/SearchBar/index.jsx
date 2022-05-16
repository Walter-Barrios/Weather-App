import React, { useState } from 'react';
import s from './SearchBar.module.css';

function SearchBar({onSearch}) {
  const [city, setCity] = useState('');

  const handleInputChange = (e) => {
    setCity(e.target.value)
  }

  return (
    <form onSubmit={(e)=> {
        e.preventDefault();
        onSearch(city);
        setCity('');
      }}>
      <div className={s.contenedor}>
        <input 
          className={s.input} 
          type="text" 
          placeholder='City...' 
          onChange={handleInputChange} 
          // onChange={(e)=>handleInputChange(e)}
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