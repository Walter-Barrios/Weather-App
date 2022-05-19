import Card from './../Card';
import s from './Cards.module.css';
import SearchBar from '../SearchBar';

function Cards({cities, onClose, onSearch}) {
  if(cities.length) {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <div className={s.contenedor}>
        {
          cities.map(city=>(
            <Card 
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
              key={city.id} 
              id={city.id}
            />
          ))
        }
        </div>
      </>
    );
  }else {
    return (
      <>
        <SearchBar onSearch={onSearch} />
        <h2>No cities.</h2>
      </>
     );
  }
}

export default Cards