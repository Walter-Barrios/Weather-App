import React from 'react';
import SearchBar from './../SearchBar';
import { NavLink } from 'react-router-dom';

// Estilos en línea.
const h1Style = {
  marginBottom: 0
}

function Nav({onSearch}) {
  return (
    <>
      <div style={{ color: 'yellow' }} className='App-header'>
        <h1 style={h1Style}>Weather App</h1>
        <NavLink exact to='/'>
          Home  
        </NavLink>
        <NavLink exact to='/about'>
          About
        </NavLink>
        <SearchBar onSearch={onSearch} />
      </div>
    </>
  )
}

export default Nav;