import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
// Estilos en línea.
const h1Style = {
  marginBottom: 0
}

function Nav() {
  return (
    <>
      <header style={{ color: 'yellow' }} className='App-header'>
        <h1 style={h1Style}>Weather App</h1>
        <div className={s.nav}>
          <NavLink exact to='/'>
            Home  
          </NavLink>
          <NavLink exact to='/about'>
            About
          </NavLink>          
        </div>
      </header>
    </>
  )
}

export default Nav;