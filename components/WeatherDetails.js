import React from 'react';
import {connect} from 'react-redux';



export default class WeatherDetails extends React.Component{

  render(){
    let time = 'test';

    if(!this.props.cityName){
     return <h1 className="ui header row centered">Please Search City</h1>
    }

    return(
      <div className="ui fluid row">
        <div className="ui two column row segment">
          <h1 className="ui header ">
            {this.props.cityName}
          </h1>
          <p>
          LAT : {this.props.coord.lat} / / LON : {this.props.coord.lon}
          </p>
          <p>
          {this.props.time /3600 }
          <br/>
          {
          
          }
          </p>
        </div>
        <div className="ui segment two column row">
        <h1 className="ui header ">
           Current Weather:
          </h1>

          <p>
          {this.props.weather[0].description}

          </p>
          <p>
          Current Temp: {Math.round(this.props.main.temp * 9/5 - 459.67)} °F
          </p>
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    city: state.currentCity,
    cityName: state.currentCity.name,
    coord: state.currentCity.coord,
    weather: state.currentCity.weather,
    main: state.currentCity.main,
    time: state.currentCity.timezone
  }
}
export default connect(mapStateToProps)(WeatherDetails);