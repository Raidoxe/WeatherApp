import Head from 'next/head'
import { getSortedPostsData } from './api/getweatherJson'
import moment from 'moment'
import Weekday from './Weekday/Weekday'
import { doesNotMatch } from 'assert';
import { v4 as uuidv4 } from 'uuid';


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
        <h2 className="current-temp">{0}°</h2>
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


          <Weekday isDayOne='true' dayName={props.weekdayInfo[0].day} dayName={props.weekdayInfo[0].temp} key={uuidv4()} />
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
            {props.weekdayInfo.map((value) =>
              <Weekday dayName={value.day} temperature={value.temp} key={value.id} isDayOne='false'/>
            )}
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
  const lon = '115.857048';
  const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
  const data = await res.json();
  //console.log(data)
  //let weatherObj = await JSON.parse(jsonWeatherData);
  let weatherData = await getWeatherPerDay(data);
  const formattedWeatherDataArray =  ridDecimal(weatherData);
  const formattedWeatherDataArrayWithIds =  populateArrayWithUniqueIds(formattedWeatherDataArray);
  const fwdawti = defineDayOne(formattedWeatherDataArrayWithIds);
  return {
    props: {
      weekdayInfo: formattedWeatherDataArrayWithIds    
    }
  }

}

//Returns a Map of temperatures in the format ({Weekday}, {Day Temperature})
async function getWeatherPerDay(weatherObj) {

  const temperatureForEachDay = [...weatherObj.daily.map(value => value.temp)];

  const dayUnixUTCTimestamp = [...weatherObj.daily.map(value => value.dt)];

  console.log(temperatureForEachDay);
  let dayAverages = [];
  for (let i = 0; i < 7; i++) {
    //Convert unix UTC Timestamp into weekday
    const date = new Date();
    const milliseconds = dayUnixUTCTimestamp[i] * 1000;
    date.setTime(milliseconds);
    const weekday = moment(date).format('dddd');

    //Get the day temperature of that specific day
    const dayTemp = temperatureForEachDay[i].day;

    //Return an array of temperatures in the format ({Weekday}, {Day Temperature})
    dayAverages.push({
      day: weekday,
      temp: dayTemp
    });
  }
  console.log(dayAverages);
  return dayAverages;
  
}

const ridDecimal = (weatherArray) => {
  let newArray = weatherArray.map((obj) => {
    const newTemp = Math.floor(obj.temp);
    obj.temp = newTemp;
    return obj;
  });
  return newArray;
}

const populateArrayWithUniqueIds = (weatherArray) => {
  let newArray = weatherArray.map((obj) => {
    obj.id = uuidv4();
    return obj;
  });
  console.log(newArray);
  return newArray;
}

const defineDayOne = (weatherArray) => {
  weatherArray[0].isDayOne = true;
  for (let i = 1; i < weatherArray.length; i++) {
    weatherArray[i].isDayOne = false;
  }
}



