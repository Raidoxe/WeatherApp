import React, {useState} from 'react';
import Link from 'next/link'


export default function FirstPost(props) {

  const [thankYou, setIsThankYou] = useState(true);

  const changeThankYouFalse = () => {
    setIsThankYou(false);
  }

  return (


  <div>


  <Layout  location={weather.location[1]} current={weather.current[1]} setWeather={setWeather}/>

    <div className="text-container">
      <Link href="/"><a><p className="previous-page">I regret this take me back</p></a></Link>
    
    <div className="weatherman">
        <img></img>
        <div className="weatherman-bio">
        <h3><span className="bold">Griff </span>Jones</h3>
        <p className="about-weatherman">Griff has been a hipster weather-person for over 40 years 
        and he’s too busy taste testing a new chai latte before the big new sneaker drop to read 
        your complaints.</p>
        </div>
    </div>
    {thankYou ? <div><h4 className="complaints">Make a complaint</h4>
    <form className="contact-form">
    <label>Your Name</label><br></br>
    <input type="text" id="fname" name="fname"></input><br></br>
    <label>Email</label><br></br>
    <input type="email" id="fname" name="fname"></input><br></br>
    <label>Complaint</label><br></br>
    <input type="text" className="complaint-text" id="fname" name="fname"></input><br></br><br></br>
    <button className="submit-btn" onClick={changeThankYouFalse}>Submit</button>
    </form></div> : <div>
        <div className="thanks">
        <h2>Thanks for submitting</h2>
        <p>We’ve received your complaint, unfortunately we have no control of the weather we merely report on it.
             As such your complaint has been sent straight to our junk mail folder along with the weekly Wish and 
             ASOS newsletters that we receive.</p>
             <p>Does anyone know how to unsubscribe from those? Seriously, you hit unsubscribe and they just keep on coming!
            </p>
            </div>
                    <div className="home-link">
                    <Link href="/"><a className="home-btn">Home</a></Link>
                    </div></div>
            }

  
    </div>
</div>
    )

}








  