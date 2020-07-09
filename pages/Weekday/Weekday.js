
const Weekday = (props) => {
    return (
        <div className="single-weekday-container">
            <div className="day-name">
                {props.dayName}
            </div>
            <div className="weekday-container-temperature">
                {props.temperature}
            </div>
        </div>
    );
}


export default Weekday;