import React from 'react';
import RadioButton from './radioButton';
import Locations from '../Objects/locations';
import { getServerSideProps } from '../pages';

const radioButtons = props => {
    
    const isButtonActive = value => {
        console.log(`${props.activeLocation} + ${value.name}`)
        if(props.activeLocation === value.name) {
            console.log('yes');
            return true;
        }
        return false;
    }

    return (
        <div className="selector">
            {Locations.map(value => {
                console.log(value);
                return <RadioButton name={value.name} lat={value.lat} lon={value.lon} setWeather={props.setWeather} isActive={isButtonActive(value)} radioButtonClicked={props.radioButtonClicked} />
                
            })}  
            
        </div>
    );
}



export default radioButtons;

/*</div>{props.activeLocation === 'london' ? <input type="radio" id="london" onClick={ async ()  =>  ( await changeLocation('51.509865','-0.118092', props.setWeather, 'london'))}name="city" checked></input> : 
            }
            <RadioButton isActive={false} name='london' lat='51.509865' lon='-0.118092' setWeather={props.setWeather} />
            <RadioButton isActive={false} name='newyork' lat=''
            <label htmlFor="london"></label>

            {props.activeLocation === 'newyork' ? <input type="radio" id="newyork" onClick={ async ()  =>  ( await changeLocation('40.730610','-73.935242', props.setWeather, 'newyork'))} name="city" checked></input> : 
            <input type="radio" id="newyork" onClick={ async ()  =>  ( await changeLocation('40.730610','-73.935242', props.setWeather, 'newyork'))} name="city" ></input>}
            <label htmlFor="newyork"></label>

            {props.activeLocation === 'perth' ? <input type="radio" id="perth" onClick={ async ()  =>  ( await changeLocation('-31.953512','115.857048', props.setWeather, 'perth'))} name="city"  checked></input> : 
            <input type="radio" id="perth" onClick={ async ()  =>  ( await changeLocation('-31.953512','115.857048', props.setWeather, 'perth'))} name="city"  ></input>}
            <label htmlFor="perth"></label>

            {props.activeLocation === 'sydney' ? <input type="radio" id="sydney" onClick={ async ()  =>  ( await changeLocation('-33.865143','151.209900', props.setWeather, 'sydney'))} name="city" checked></input> : 
            <input type="radio" id="sydney" onClick={ async ()  =>  ( await changeLocation('-33.865143','151.209900', props.setWeather, 'sydney'))} name="city"></input>}
            <label htmlFor="sydney"></label>

            {props.activeLocation === 'california' ? <input type="radio" id="california" onClick={ async ()  =>  ( await changeLocation('36.778259','-119.417931', props.setWeather, 'california'))} name="city" checked></input> : 
            <input type="radio" id="california" onClick={ async ()  =>  ( await changeLocation('36.778259','-119.417931', props.setWeather, 'california'))} name="city"></input>}
            <label htmlFor="california"></label>*/