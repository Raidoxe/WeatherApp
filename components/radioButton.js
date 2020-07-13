import React from 'react';
import changeLocation from './changeLocation'

const radioButton = props => {
    /*let [active, setActive] = React.useState(props.isActive);*/

    const checkActive = () => {
        return props.isActive;
    }

    const buttonClicked = () => {
        props.radioButtonClicked(props.name);
    }
    
    return (
        <div>
            {props.isActive ? 
            <button type="radio" id={props.name} onClick={()  =>  {changeLocation(props.lat,props.lon, props.setWeather, props.name);
            buttonClicked();}}name="city" className="button-active"/>
            : 
            <button type="radio" id={props.name} onClick={()  =>  {changeLocation(props.lat,props.lon, props.setWeather, props.name);
                buttonClicked();}}name="city" className="button"/>
            }
            <label htmlFor={props.name}></label>
        </div> 
    );
}



export default radioButton;