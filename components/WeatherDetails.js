import React from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import {fetchGeocode} from '../actions';


export default class WeatherDetails extends React.Component{

  state = {
    time: 'loading'
  }
  
  convertTime = (tz) =>{
    
    let utcTime = moment({hour: new Date().getUTCHours(), minute: new Date().getUTCMinutes()});
    utcTime.add(tz, 'hours');
    let result = utcTime.format("h:mm");
    let newT = result;

    return newT

  }

  componentDidUpdate() {
   //this.props.fetchGeocode(`${this.props.coord.lat},${this.props.coord.lon}`)

    //  setInterval( () => {
    //   const newTime = this.convertTime(this.props.time/3600);
    //   this.setState({time: newTime })
    // }, 1000);
  }
  render(){
    if(!this.props.cityName){
     return <h1 className="ui header row centered">Please Search City</h1>
    }

    return(
      <div className="ui fluid row">
        <div className="ui two column row segment">
          <h1 className="ui header ">
            {this.props.cityName} - {this.props.country.country}
          </h1>
          <p>
          LAT : {this.props.coord.lat} / / LON : {this.props.coord.lon}
          </p>
          <div className="ui button" onClick={()=> this.props.fetchGeocode(`${this.props.coord.lat},${this.props.coord.lon}`) }>test</div>
          <p>
          <br/>
          Current Time : { this.convertTime(this.props.time/3600)}
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
  console.log(state)
  return {
    city: state.currentCity,
    cityName: state.currentCity.name,
    coord: state.currentCity.coord,
    weather: state.currentCity.weather,
    main: state.currentCity.main,
    time: state.currentCity.timezone,
    country: state.currentCity.sys
  }
}
export default connect(mapStateToProps, {fetchGeocode})(WeatherDetails);