import React, { useState } from 'react';
import Link from 'next/link'
import getWeatherPerDay from '../components/getWeatherPerDay'
import gethourly from '../components/getHourly'
import Layout from '../components/layout'
import Weekdays from '../components/weekDays'

export default function Home(props) {
  const loadedIndex = 0;


  const [weather, setWeather] = useState(props.weather);
  const [currentLocation, setCurrentLocation] = useState('perth');

  const getWeatherIndex = (arr) => {
    for(let i = 0; i < arr.length; i++) {
      if(arr[i] === currentLocation) {
        loadedIndex = i;
        return i;
      }
    }
    throw new error;
  }

  return (

<div className="container">

    <Layout  location={weather.location[1]} current={weather.current[1]} setWeather={setWeather.bind(this)}/>

    <Weekdays weather={weather} />

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
  const hourly = await gethourly(data.hourly, data.timezone_offset);
  
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
      location: weatherData[8],
      hour: hourly
    
    }
  }}
}
