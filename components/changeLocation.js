import gethourly from './getHourly'
import getWeatherPerDay from './getWeatherPerDay'

async function changeLocation(lat, lon, set, locName) {
    setUserSession(locName);
    const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
    const data = await res.json();
    let weatherData = await getWeatherPerDay(data);
    const hourly = await gethourly(data.hourly, data.timezone_offset);
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

    async function setUserSession(locName) {
      console.log(locName);
      window.localStorage.setItem('activeLocation', locName);
      console.log(window.localStorage.getItem('activeLocation'));
      /*switch(locName) {
        case 'london':
          window.localStorage.setItem('activeLocation', 'london');
          break;
        case 'newyork':
          window.localStorage.setItem('activeLocation', 'newyork');
          break;
        case 'perth':
            window.localStorage.setItem('activeLocation', 'perth');
            break;
        case 'sydney':
            window.localStorage.setItem('activeLocation', 'sydney');
            break;
          case 'california':
            window.localStorage.setItem('activeLocation', 'california');
            break;
      }*/
    }
 
    export default changeLocation;