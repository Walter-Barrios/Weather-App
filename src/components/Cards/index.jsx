import Card from './../Card';
import s from './Cards.module.css';

function Cards({cities}) {
  return (
    <div className={s.contenedor}>
    {
      cities.map(city=>(
        <Card 
          max={city.main.temp_max}
          min={city.main.temp_min}
          name={city.name}
          img={city.weather[0].icon}
          onClose={() => alert(city.name)}          
        />
      ))
    }    
    </div>
  )
}

export default Cards