import Card from './Card'

function Cards({ cities }) {
  return (
    <>
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
    </>
  )
}

export default Cards