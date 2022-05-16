import React, { useState } from 'react';
import './App.css'; // Estilos globales.
import Cards from './components/Cards';
import Nav from './components/Nav';
import { Route } from 'react-router-dom';
import About from './components/About';
import City from './components/City';
import { Switch } from 'react-router-dom';
import Error404 from './components/Error404';

const apiKey = process.env.REACT_APP_API_KEY;

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    if(city) {
      fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
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
            // setCities(oldCities => {
            //   if(oldCities.some(city => city.name === ciudad.name)) {
            //     return oldCities
            //   }else {
            //     return [...oldCities, ciudad]
            //   }
            // });
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

  function onFilter(idCity) {
    const aCity = cities.find(city => city.id === parseInt(idCity));
    return aCity;
  }

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Switch>
        <Route 
          exact 
          path='/' 
          render={() => <Cards cities={cities} onClose={onClose} />}
        />
        <Route
          path='/city/:idCity' 
          render={({match}) => (
            <City city={onFilter(match.params.idCity)} match={match} />
          )}
        />
        <Route path='/about' component={About} />
        <Route path='*' component={Error404} />
      </Switch>
    </div>
  );
}

export default App;
