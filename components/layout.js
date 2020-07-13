import changeLocation from './changeLocation'
import { useLayoutEffect } from 'react'
import Head from 'next/head'
import React from 'react';
import RadioButtons from './radioButtons';
import Locations from '../Objects/locations';

class layout extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let activeLocation = window.localStorage.getItem('activeLocation');
        console.log(activeLocation);
        if (activeLocation != null && activeLocation != this.props.location) {
            //this.props.setCurrentLocation(activeLocation);
            let locationsIndex = 0;
            for(let i = 0; i < Locations.length; i++) {
                if (Locations[i].name === activeLocation) {
                    locationsIndex = i;
                }
            }
            changeLocation(Locations[locationsIndex].lat, Locations[locationsIndex].lon, this.props.setWeather, Locations[locationsIndex].name)
        }
    }

    radioButtonClicked(name) {
        //this.props.setCurrentLocation(activeLocation);
        let locationsIndex = 0;
        for(let i = 0; i < Locations.length; i++) {
            if (Locations[i].name === name) {
                locationsIndex = i;
            }
        }
        changeLocation(Locations[locationsIndex].lat, Locations[locationsIndex].lon, this.props.setWeather, Locations[locationsIndex].name)
    }
    
    
    render() {
        return(
    <React.Fragment>
        <Head>
            <title>Create Next App</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="hero-img" id={this.props.location}></div>
        <div className="hero">
            <h3 className="city">{this.props.location}</h3>
            <a href=""><p className="change">Change</p></a>
            <h2 className="current-temp">{this.props.current}°</h2>
        </div>
        <div className="divider">
            <RadioButtons activeLocation={this.props.location} setWeather={this.props.setWeather} radioButtonClicked={this.radioButtonClicked.bind(this)}/>
        </div>
        </React.Fragment>
        
        )
    }
}

export default layout;
