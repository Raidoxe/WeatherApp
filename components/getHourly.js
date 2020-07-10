
import moment from 'moment'

async function gethourly(hours){
    let hourave = [];
    let temp = 0;
    for( let i = 0; i < 24; i = i+2){
      const date = new Date();
      const milliseconds = hours[i].dt * 1000;
      date.setTime(milliseconds);
      const time = moment(date).format('hh A');
  
      temp = Math.floor(hours[i].temp);
      hourave.push([time, temp, hours[i].weather[0].icon])
    }
    return hourave;
  }
  

export default gethourly;