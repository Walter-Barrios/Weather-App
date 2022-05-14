import React from 'react'
// import styled from 'styled-components';
import s from './SearchBar.module.css';


// const DivWrapper = styled.div`
//   background-color: value(--primary-bg-color);
// `;

function SearchBar({onSearch}) {
  return (
    // <DivWrapper>
    <div className={s.contenedor}>
      <input className={s.input} type="text" placeholder='City...' />
      <button className={s.boton} onClick={onSearch} title="Add a city.">Search</button>
    </div>
    // </DivWrapper>
  )
}

export default SearchBar