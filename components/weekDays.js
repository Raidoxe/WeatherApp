import LoadDay from './LoadDay'
import Hourly from './hourly'
import Link from 'next/link'

export default function weekdays(props) {
    console.log(props.weather.day1[0])

return (


<React.Fragment>
    <div className="main">
    <div className="text-container">

        <p>Today:</p>
        <LoadDay day={props.weather.day1[0]} max={props.weather.day1[1].max} min={props.weather.day1[1].min} icon={props.weather.day1[2]} />

    </div>

    <Hourly hourdata = {props.weather.hour}/>

    <div className="text-container">
        <p>Upcoming:</p>
        <LoadDay day={props.weather.day2[0]} max={props.weather.day2[1].max} min={props.weather.day2[1].min} icon={props.weather.day2[2]}/>
        <LoadDay day={props.weather.day3[0]} max={props.weather.day3[1].max} min={props.weather.day3[1].min}  icon={props.weather.day3[2]}/>
        <LoadDay day={props.weather.day4[0]} max={props.weather.day4[1].max} min={props.weather.day4[1].min}  icon={props.weather.day4[2]}/>
        <LoadDay day={props.weather.day5[0]} max={props.weather.day5[1].max} min={props.weather.day5[1].min} icon={props.weather.day5[2]} />
        <LoadDay day={props.weather.day6[0]} max={props.weather.day6[1].max} min={props.weather.day6[1].min} icon={props.weather.day6[2]} />
        <LoadDay day={props.weather.day7[0]} max={props.weather.day7[1].max} min={props.weather.day7[1].min} icon={props.weather.day7[2]} />
    </div>
    </div>


    <div className="contact">
    <p>Dont like the weather?</p>
    <Link href="/contact"><a>Complain to the weather person</a></Link>

</div>

<div className="contact">
        <p>Dont like the weather?</p>
        <Link href="/contact"><a>Complain to the weather person</a></Link>
    </div>
    
</React.Fragment>
)
}