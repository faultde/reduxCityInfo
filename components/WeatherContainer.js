import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';


let sun = "https://i.ibb.co/9yZdBRx/sunny.png";

class WeatherContainer extends React.Component{
  state = {
    time: 'loading'
  }

   convertTime = (tz) =>{
    
    let utcTime = moment({hour: new Date().getUTCHours(), minute: new Date().getUTCMinutes()});
    utcTime.add(tz, 'hours');
    let result = utcTime.format("h:mm A");
    let newT = result;

    return newT

  }

  render(){
    return(
      <div className="ui segment two column row">
          <h1 className="ui header centered"> City Info</h1>
          <h1 className="ui header centered divider">Current Time: { this.convertTime(this.props.time/3600)}</h1>
          <h1 className="ui header centered">Current temp: {Math.round(this.props.main.temp * 9/5 - 459.67)} °F</h1>
          <img className="ui centered image" src={`https://openweathermap.org/img/wn/${this.props.weather[0].icon}@2x.png`}/>
          <h1 className="ui header centered"> {this.props.weather[0].description}</h1>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    weather: state.currentCity.weather,
    main: state.currentCity.main,
    time: state.currentCity.timezone,
  }
}

export default connect(mapStateToProps)(WeatherContainer);