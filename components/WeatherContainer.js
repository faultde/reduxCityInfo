import React from 'react';
import {connect} from 'react-redux';


let sun = "https://i.ibb.co/9yZdBRx/sunny.png";

class WeatherContainer extends React.Component{
  state = {
    time: 'loading'
  }



  render(){
    return(
        <div className="ui segment two column row">
        <h1 className="ui header centered segment">
           Current Weather
          </h1>
          <img className="ui centered medium image segment" src={sun}/>
          <div className="ui header centered segment">
          <p>
          {this.props.weather[0].description}
          <br/>
          Current Temp: {Math.round(this.props.main.temp * 9/5 - 459.67)} °F
          </p>
          </div>
      </div>
    )
  }
}
const mapStateToProps = (state) =>{
  return {
    weather: state.currentCity.weather,
    main: state.currentCity.main
  }
}

export default connect(mapStateToProps)(WeatherContainer);