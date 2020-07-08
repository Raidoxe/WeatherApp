import { getSortedPostsData } from './api/getweatherJson'

export default function FirstPost({allPostsData}) {
  return (
  <div>
    <div className="hero-img"></div>
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
    <h4 className="complaints">Make a complaint</h4>
    <form className="contact-form">
    <label>Your Name</label><br></br>
    <input type="text" id="fname" name="fname"></input><br></br>
    <label>Email</label><br></br>
    <input type="email" id="fname" name="fname"></input><br></br>
    <label>Complaint</label><br></br>
    <input type="text" className="complaint-text" id="fname" name="fname"></input><br></br><br></br>
    <input type="submit" className="submit-btn" value="Submit"></input>
    </form>
    </div>
</div>
    )

}

export async function getServerSideProps() {
    const allPostsData = await getSortedPostsData()
    return {
      props: {
        allPostsData
      }
    }
  }
  