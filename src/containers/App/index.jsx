import React, { useState } from 'react';
import './App.css'; // Estilos globales.
import Cards from './../../components/Cards';
import Nav from './../../components/Nav';
import { Route, Switch } from 'react-router-dom';
import About from './../../components/About';
import City from './../../components/City';
import Error404 from './../../components/Error404';
import fetchCity from './../../services/fetchCity';

function App() {
  const [cities, setCities] = useState([]);

  function onSearch(city) {
    fetchCity(city, setCities);
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
      <Nav />
      <Switch>
        <Route 
          exact 
          path='/' 
          render={() => <Cards cities={cities} onClose={onClose} onSearch={onSearch} />}
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
