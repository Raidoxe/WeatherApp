

const loadDay = (props) => {
    return(
        <div className="week-day">
            <h4 className="day-one">{props.day}</h4>
            <div className="high-low-temp">
                <p className="temp-icon-lg"><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="React Logo" /></p>
                <p className="temp-high">{props.max}°</p>
                <p className="temp-low">{props.min}°</p>
            </div>
        </div>
    )
}

export default loadDay;