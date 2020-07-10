import React, {useState} from 'react';
import Link from 'next/link'
import ComplaintForm from '../components/complaintForm';

export default function FirstPost(props) {

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

    <ComplaintForm/>
    

    
    
    </div>
</div>
    )

}








  