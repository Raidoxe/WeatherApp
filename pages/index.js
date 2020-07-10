import Head from 'next/head'
import moment from 'moment'
import LoadDay from '../components/LoadDay'
import Hourly from '../components/hourly'
import React, { useState } from 'react';
import Link from 'next/link'



export default function Home(props) {

 // usestate lat/lon

 // use effect on latlon triggers fetch weather... 

  const [weather, setWeather] = useState(props.weather);
    
  return (
    

<div className="container">

    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>
<div className="hero-img" id={weather.location[1]}></div>
  <div className="hero">
        <h3 className="city">{weather.location[1]}</h3>
        <a href=""><p className="change">Change</p></a>
        <h2 className="current-temp">{weather.current[1]}°</h2>
  </div>
    <div className="divider">
        <div className="selector">
            <input type="radio" id="london" onClick={ async ()  =>  ( await changeLocation('51.509865','-0.118092', setWeather))}name="city"></input>
            <label htmlFor="london"></label>
            <input type="radio" id="newyork" onClick={ async ()  =>  ( await changeLocation('40.730610','-73.935242', setWeather))} name="city"></input>
            <label htmlFor="newyork"></label>
            <input type="radio" id="perth" onClick={ async ()  =>  ( await changeLocation('-31.953512','115.857048', setWeather))} name="city"  ></input>
            <label htmlFor="perth"></label>
            <input type="radio" id="sydney" onClick={ async ()  =>  ( await changeLocation('-33.865143','151.209900', setWeather))} name="city"></input>
            <label htmlFor="sydney"></label>
            <input type="radio" id="california" onClick={ async ()  =>  ( await changeLocation('36.778259','-119.417931', setWeather))} name="city"></input>
            <label htmlFor="california"></label>
        </div>
    </div>

    
    
        <div className="main">
        <div className="text-container">
            <p>Today:</p>
            <LoadDay day={weather.day1[0]} max={weather.day1[1].max} min={weather.day1[1].min} icon={weather.day1[2]} />
            
        </div>

        <Hourly />

        <div className="text-container">
            <p>Upcoming:</p>
            <LoadDay day={weather.day2[0]} max={weather.day2[1].max} min={weather.day2[1].min} icon={weather.day2[2]}/>
            <LoadDay day={weather.day3[0]} max={weather.day3[1].max} min={weather.day3[1].min}  icon={weather.day3[2]}/>
            <LoadDay day={weather.day4[0]} max={weather.day4[1].max} min={weather.day4[1].min}  icon={weather.day4[2]}/>
            <LoadDay day={weather.day5[0]} max={weather.day5[1].max} min={weather.day5[1].min} icon={weather.day5[2]} />
            <LoadDay day={weather.day6[0]} max={weather.day6[1].max} min={weather.day6[1].min} icon={weather.day6[2]} />
            <LoadDay day={weather.day7[0]} max={weather.day7[1].max} min={weather.day7[1].min} icon={weather.day7[2]} />
    </div>
    </div>
    <div className="contact">
        <p>Dont like the weather?</p>
        <Link href="/contact"><a>Complain to the weather person</a></Link>
    </div>
    

  </div>
)}


//Gets all prop data for weekdays before render
export async function getServerSideProps () {
  const lat = '-31.953512';
  const lon = '115.857048';
  const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
  const data = await res.json();
  //let weatherObj = await JSON.parse(jsonWeatherData);
  let weatherData = await getWeatherPerDay(data);
  //weatherData = ridDecimal(weatherData);
  return {
    props: { weather: { 
      current: weatherData[0],
      day1: weatherData[1],
      day2: weatherData[2],
      day3: weatherData[3],
      day4: weatherData[4],
      day5: weatherData[5],
      day6: weatherData[6],
      day7: weatherData[7],
      location: weatherData[8]
    }
  }}
}

//Returns a Map of temperatures in the format ({Weekday}, {Day Temperature})
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



async function changeLocation(lat, lon, set) {
    const res = await fetch(`http://localhost:3000/api/weatherdata?lat=${lat}&lon=${lon}`);
    const data = await res.json();
    let weatherData = await getWeatherPerDay(data);
    return set( {  
        current: weatherData[0],
        day1: weatherData[1],
        day2: weatherData[2],
        day3: weatherData[3],
        day4: weatherData[4],
        day5: weatherData[5],
        day6: weatherData[6],
        day7: weatherData[7],
        location: weatherData[8]
      })
    }
 
