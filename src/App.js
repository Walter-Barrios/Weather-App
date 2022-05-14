import React from 'react';
import './App.css'; // Estilos globales.
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data';

// Estilos en línea.
const h1Style = {
  marginBottom: 0
}

function App() {
  return (
    <div className="App">
      <div style={{ color: 'yellow' }} className='App-header'>
        <h1 style={h1Style}>Weather App</h1>
        <SearchBar onSearch={(ciudad) => alert(ciudad)} />
      </div>
      <div>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards cities={data} />
      </div>
    </div>
  );
}

export default App;
