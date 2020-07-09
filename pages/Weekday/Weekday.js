
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
        <div className="week-day">
                <h4 className="day-one">{props.dayName}</h4>
                <div className="high-low-temp">
                    <p className="temp-icon-lg">Icon</p>
                    <p className="average-temp">{props.temperature}</p>
                </div>
        </div>
    );
}


export default Weekday;