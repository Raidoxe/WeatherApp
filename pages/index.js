import Head from 'next/head'
import { getSortedPostsData } from './api/getweatherJson'



export default function Home({allPostsData}) {
  return (
<div className="container">

    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

  <div className="hero">
        <h3 className="city">Perth</h3>
        <a href=""><p className="change">Change</p></a>
        <h2 className="current-temp">{allPostsData.current.temp}°</h2>
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

    
    <div className="container">
    <div className="main">
        <p>Today:</p>
            <div className="week-day">
                <h4 className="day-one">Wednesday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[0].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[0].temp.min}°</p>
                </div>
            </div>
            <p>Upcoming:</p>
            <div className="week-day">
                <h4 className="day-one">Thursday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[1].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[1].temp.min}°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Friday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[2].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[2].temp.min}°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Saturday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[3].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[3].temp.min}°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Sunday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[4].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[4].temp.min}°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Monday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[5].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[5].temp.min}°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Tuesday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">{allPostsData.daily[6].temp.max}°</p>
                    <p className="temp-low">{allPostsData.daily[6].temp.min}°</p>
                </div>
            </div>
    </div>
</div>
    <div className="contact">
        <p>Dont like the weather?</p>
        <span><p>Complain to the weather person!</p></span>
    </div>


  </div>
)}
export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}
