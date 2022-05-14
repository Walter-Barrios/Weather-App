import React from 'react'
import styled from 'styled-components';

const DivWrapper = styled.div`
  background-color: value(--primary-bg-color);
`;

function SearchBar({onSearch}) {
  return (
    <DivWrapper>
      <input type="text" placeholder='Ciudad...' />
      <button onClick={onSearch}>Buscar</button>
    </DivWrapper>
  )
}

export default SearchBar