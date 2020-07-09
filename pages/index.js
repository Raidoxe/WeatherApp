import Head from 'next/head'
import { getSortedPostsData } from './api/getweatherJson'
import moment from 'moment'
import LoadDay from '../components/LoadDay'



export default function Home(props) {
  return (

<div className="container">

    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
<div className="hero-img"></div>
  <div className="hero">
        <h3 className="city">Perth</h3>
        <a href=""><p className="change">Change</p></a>
        <h2 className="current-temp">{props.current[1]}°</h2>
  </div>
    <div className="divider">
        <div className="selector">
            <input type="radio" id="london" className="active" name="gender" value="other"></input>
            <input type="radio" id="newyork" name="gender" value="other"></input>
            <input type="radio" id="perth" name="gender" value="other"></input>
            <input type="radio" id="sydney" name="gender" value="other"></input>
            <input type="radio" id="california" name="gender" value="other"></input>
        </div>
    </div>

    
    
        <div className="main">
        <div className="text-container">
            <p>Today:</p>
            <LoadDay day={props.day1[0]} max={props.day1[1].max} min={props.day1[1].min}  />
        </div>
            <div className="daily-report">
            <div className="00 time">
                <p>00am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="2 time">
                <p>02am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="4 time">
                <p>04am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="6 time">
                <p>06am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="8 time">
                <p>10am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="10am time">
                <p>12am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="12 time">
                <p>02pm</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="02 time">
                <p>04pm</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="04 time">
                <p>06pm</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="06 time">
                <p>08pm</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="08 time">
                <p>10pm</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            <div className="10pm time">
                <p>12am</p>
                <p>icon</p>
                <p>10°</p>
            </div>
            </div>


        <div className="text-container">
            <p>Upcoming:</p>
            <LoadDay day={props.day2[0]} max={props.day2[1].max} min={props.day2[1].min}  />
            <LoadDay day={props.day3[0]} max={props.day3[1].max} min={props.day3[1].min}  />
            <LoadDay day={props.day4[0]} max={props.day4[1].max} min={props.day4[1].min}  />
            <LoadDay day={props.day5[0]} max={props.day5[1].max} min={props.day5[1].min}  />
            <LoadDay day={props.day6[0]} max={props.day6[1].max} min={props.day6[1].min}  />
            <LoadDay day={props.day7[0]} max={props.day7[1].max} min={props.day7[1].min}  />
    </div>
    </div>
    <div className="contact">
        <p>Dont like the weather?</p>
        <span><p>Complain to the weather person!</p></span>
    </div>


  </div>
)}





//Gets all prop data for weekdays before render
export async function getServerSideProps() {
  const lat = '-31.953512';
  const lon = '115.857048'
  const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
  const data = await res.json();
  //let weatherObj = await JSON.parse(jsonWeatherData);
  let weatherData = await getWeatherPerDay(data);
  //weatherData = ridDecimal(weatherData);
  return {
    props: {
      current: weatherData[0],
      day1: weatherData[1],
      day2: weatherData[2],
      day3: weatherData[3],
      day4: weatherData[4],
      day5: weatherData[5],
      day6: weatherData[6],
      day7: weatherData[7]
    }
  }

}

//Returns a Map of temperatures in the format ({Weekday}, {Day Temperature})
async function getWeatherPerDay(weatherObj) {

  const temperatureForEachDay = [...weatherObj.daily.map(value => value.temp)];


  const dayUnixUTCTimestamp = [...weatherObj.daily.map(value => value.dt)];

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
    
    dayAverages.push([weekday,  temperatureForEachDay[i]]);
    //Return a Map of temperatures in the format ({Weekday}, {Day Temperature})
    //dayAverages.set(weekday, temperatureForEachDay[i]);
  }
  return dayAverages;
  
}




