import Card from './../Card';
import s from './Cards.module.css';

function Cards({cities, onClose}) {
  if(cities) {
    return (
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
    );
    }else {
      return (
        <div>No cities.</div>
      );
    }
}

export default Cards