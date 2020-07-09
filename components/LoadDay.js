const loadDay = (props) => {
    return(
        <div className="week-day">
            <h4 className="day-one">{props.day}</h4>
            <div className="high-low-temp">
                <p className="temp-icon-lg">Icon</p>
                <p className="temp-high">{props.max}°</p>
                <p className="temp-low">{props.min}°</p>
            </div>
        </div>
    )
}

export default loadDay;