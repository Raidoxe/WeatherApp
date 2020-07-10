import gethourly from './getHourly'
import getWeatherPerDay from './getWeatherPerDay'

async function changeLocation(lat, lon, set) {
    const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
    const data = await res.json();
    let weatherData = await getWeatherPerDay(data);
    const hourly = await gethourly(data.hourly);
    return set( {  
        current: weatherData[0],
        day1: weatherData[1],
        day2: weatherData[2],
        day3: weatherData[3],
        day4: weatherData[4],
        day5: weatherData[5],
        day6: weatherData[6],
        day7: weatherData[7],
        location: weatherData[8],
        hour: hourly
       
      })
    }
 
    export default changeLocation;