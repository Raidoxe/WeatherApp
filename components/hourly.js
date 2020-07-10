const hourly = (props) => {
    return(
        <div className="daily-bg">
        <div className="daily-report">
            
            {props.hourdata.map(hour => (
                <div className="time" key={hour[0]}>
                    <p>{hour[0]}</p>
                    <p><img className="sm-icon"src={`http://openweathermap.org/img/wn/${hour[2]}@2x.png`} alt="React Logo" /></p>
                    <p>{hour[1]}°</p>
                </div>
                
          ))}

        </div>
        </div>
    )
}

export default hourly;