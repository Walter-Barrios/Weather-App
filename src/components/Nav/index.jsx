import React from 'react';
import SearchBar from './../SearchBar';

// Estilos en línea.
const h1Style = {
  marginBottom: 0
}

function Nav({onSearch}) {
  return (
    <>
      <div style={{ color: 'yellow' }} className='App-header'>
        <h1 style={h1Style}>Weather App</h1>
        <SearchBar onSearch={onSearch} />
      </div>  
    </>
  )
}

export default Nav;