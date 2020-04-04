import React from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import {fetchGeocode} from '../actions';
import MapDisplay from './MapDisplay';

let map = "https://i.ibb.co/ss263DC/map.png";

class CityContainer extends React.Component{
  state ={
    lastCoord: ""
  }

   convertTime = (tz) =>{
    
    let utcTime = moment({hour: new Date().getUTCHours(), minute: new Date().getUTCMinutes()});
    utcTime.add(tz, 'hours');
    let result = utcTime.format("h:mm");
    let newT = result;

    return newT

  }

  render(){
    return(
        <div className="ui two column row segment">
          <h1 className="ui header centered segment ">
            {this.props.cityName} - {this.props.country.country}
          </h1>
          <MapDisplay map={map} />
          <div className="ui header centered segment">
          <p>
         
          {this.props.address}
          <br/>
          Current Time : { this.convertTime(this.props.time/3600)}
          <br/>
          </p>
          </div>
        </div>
    )
  }
}
const mapStateToProps = (state) =>{
  console.log(state);
  return {
    city: state.currentCity,
    cityName: state.currentCity.name,
    coord: state.currentCity.coord,
    weather: state.currentCity.weather,
    main: state.currentCity.main,
    time: state.currentCity.timezone,
    country: state.currentCity.sys,
    address: state.cityCoords.formatted_address
  }
}

export default connect(mapStateToProps, {fetchGeocode})(CityContainer);