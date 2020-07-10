import changeLocation from './changeLocation'
import { useLayoutEffect } from 'react'
import Head from 'next/head'

const layout = (props) => {
    return(
<React.Fragment>
    <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>
    <div className="hero-img" id={props.location}></div>
    <div className="hero">
        <h3 className="city">{props.location}</h3>
        <a href=""><p className="change">Change</p></a>
        <h2 className="current-temp">{props.current}°</h2>
    </div>
    <div className="divider">
        <div className="selector">
            <input type="radio" id="london" onClick={ async ()  =>  ( await changeLocation('51.509865','-0.118092', props.setWeather))}name="city"></input>
            <label htmlFor="london"></label>
            <input type="radio" id="newyork" onClick={ async ()  =>  ( await changeLocation('40.730610','-73.935242', props.setWeather))} name="city"></input>
            <label htmlFor="newyork"></label>
            <input type="radio" id="perth" onClick={ async ()  =>  ( await changeLocation('-31.953512','115.857048', props.setWeather))} name="city"  ></input>
            <label htmlFor="perth"></label>
            <input type="radio" id="sydney" onClick={ async ()  =>  ( await changeLocation('-33.865143','151.209900', props.setWeather))} name="city"></input>
            <label htmlFor="sydney"></label>
            <input type="radio" id="california" onClick={ async ()  =>  ( await changeLocation('36.778259','-119.417931', props.setWeather))} name="city"></input>
            <label htmlFor="california"></label>
        </div>
    </div>
    </React.Fragment>
    
    )
}
export default layout;
