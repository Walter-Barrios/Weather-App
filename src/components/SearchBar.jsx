import React from 'react'

function SearchBar({onSearch}) {
  return (
    <div>
      <input type="text" placeholder='Ciudad...' />
      <button onClick={onSearch}>Buscar</button>
    </div>
  )
}

export default SearchBar