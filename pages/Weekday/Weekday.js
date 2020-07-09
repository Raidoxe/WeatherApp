
const Weekday = (props) => {
    return (
        /*<div className="single-weekday-container">
            <div className="day-name">
                {props.dayName}
            </div>
            <div className="weekday-container-temperature">
                {props.temperature}
            </div>
        </div>*/
            <div className={props.isDayOne == 'true' ? "day-one" : "other-weekdays"}>
            <h4 className="other-days">{props.dayName}</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="average-temp">{props.temperature}</p>
                </div>
            </div>
    );
}


export default Weekday;