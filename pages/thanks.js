import Link from 'next/link'



export default function Thanks() {
  return (
  <div>
    <div className="hero-img"></div>
            <div className="hero">
            <h3 className="city">Perth</h3>
            <a href=""><p className="change">Change</p></a>
            
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
    <div className="text-container">
    <a><p className="previous-page">I regret this take me back!</p></a>
    <div className="weatherman">
        <img></img>
        <div className="weatherman-bio">
        <h3><span className="bold">Griff </span>Jones</h3>
        <p className="about-weatherman">Griff has been a hipster weather-person for over 40 years 
        and he’s too busy taste testing a new chai latte before the big new sneaker drop to read 
        your complaints.</p>
        </div>
    </div>
    </div>
    <div className="thanks">
    <h2>Thanks for submitting</h2>
    <p>We’ve received your complaint, unfortunately we have no control of the weather we merely report on it.
         As such your complaint has been sent straight to our junk mail folder along with the weekly Wish and 
         ASOS newsletters that we receive.
         <br></br>Does anyone know how to unsubscribe from those? Seriously, you hit unsubscribe and they just keep on coming!
        </p>
        </div>
        <div className="home-link">
        <Link href="/"><a className="home-btn">Home</a></Link>
        </div>

        </div>)}