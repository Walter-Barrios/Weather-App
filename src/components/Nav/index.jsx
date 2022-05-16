import React from 'react';
import { NavLink } from 'react-router-dom';

// Estilos en línea.
const h1Style = {
  marginBottom: 0
}

function Nav() {
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
      </div>
    </>
  )
}

export default Nav;