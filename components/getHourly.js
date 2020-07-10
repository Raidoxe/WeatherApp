
import moment from 'moment'

async function gethourly(hours, offset){
    let hourave = [];
    let temp = 0;
    for( let i = 0; i < 24; i = i+2){
      let adjustTime = hours[i].dt + offset - 28800;
      const date = new Date();
      const milliseconds = adjustTime * 1000;
      date.setTime(milliseconds);
      const time = moment(date).format('h A');
  
      temp = Math.floor(hours[i].temp);
      hourave.push([time, temp, hours[i].weather[0].icon])
    }
    return hourave;
  }
  

export default gethourly;