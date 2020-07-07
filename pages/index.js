import Head from 'next/head'



export default function Home() {
  return (
<div className="container">

    <Head>
    <title>Create Next App</title>
    <link rel="icon" href="/favicon.ico" />
    </Head>

  <div className="hero">
        <h3 className="city">London</h3>
        <a href=""><p className="change">Change</p></a>
        <h2 className="current-temp">13°</h2>
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
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <p>Upcoming:</p>
            <div className="week-day">
                <h4 className="day-one">Thursday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Friday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Saturday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Sunday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Monday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
                </div>
            </div>
            <div className="week-day">
                <h4 className="day-one">Tuesday</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="temp-high">22°</p>
                    <p className="temp-low">10°</p>
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
