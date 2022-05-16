import React, { useState } from 'react';
import './App.css'; // Estilos globales.
import Cards from './components/Cards';
import Nav from './components/Nav';
import env from 'react-dotenv';

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    if(city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${env.API_KEY}&units=metric`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          let results = cities.filter(c => c.id === recurso.id);
          if ( results.length ) {
            alert("City already exist!");
          }else {
            const ciudad = {
              min: Math.round(recurso.main.temp_min),
              max: Math.round(recurso.main.temp_max),
              img: recurso.weather[0].icon,
              id: recurso.id,
              wind: recurso.wind.speed,
              temp: recurso.main.temp,
              name: recurso.name,
              weather: recurso.weather[0].main,
              clouds: recurso.clouds.all,
              latitud: recurso.coord.lat,
              longitud: recurso.coord.lon
            };
            setCities(oldCities => [...oldCities, ciudad]);
          }
        } else {
          alert("City not found");
        }
      });
    }else {
      alert("You must enter a city.");
    }
  }

  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      {/* <hr /> */}
      <div>
        <Cards cities={cities} onClose={onClose}/>
      </div>
    </div>
  );
}

export default App;
