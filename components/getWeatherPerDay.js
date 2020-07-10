import moment from 'moment'

async function getWeatherPerDay(weatherObj) {

    const temperatureForEachDay = [...weatherObj.daily.map(value => value.temp)];
    const timeDiff = weatherObj.timezone_offset;
    const weatherIcon = [...weatherObj.daily.map(value => value.weather)];
  
    const dayUnixUTCTimestamp = [...weatherObj.daily.map(value => value.dt + timeDiff)];
  
    let dayAverages = [];
    dayAverages.push(['current',  Math.floor(weatherObj.current.temp)])
    for (let i = 0; i < 7; i++) {
      //Convert unix UTC Timestamp into weekday
      const date = new Date();
      const milliseconds = dayUnixUTCTimestamp[i] * 1000;
      date.setTime(milliseconds);
      const weekday = moment(date).format('dddd');
  
      //Get the day temperature of that specific day
      for (let m in temperatureForEachDay[i]){
          temperatureForEachDay[i][m] = Math.floor(temperatureForEachDay[i][m]);
      }
      
      dayAverages.push([weekday,  temperatureForEachDay[i], weatherIcon[i][0].icon]);
    }
    const locatoin = weatherObj.timezone.split("/");
    dayAverages.push(["location", locatoin[1]])
  
    return dayAverages;
    
  }

  export default getWeatherPerDay;