const hourly = (props) => {
    return(
        <div className="daily-report">
            {props.hourdata.map(hour => (
                <div className="time">
                    <p>{hour[0]}</p>
                    <p><img src={`http://openweathermap.org/img/wn/${hour[2]}@2x.png`} alt="React Logo" /></p>
                    <p>{hour[1]}°</p>
                </div>
          ))}

        
        </div>
    )
}

export default hourly;