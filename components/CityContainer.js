import React from "react";
import {connect} from 'react-redux';
import {fetchGeocode} from '../actions';
import MapDisplay from './MapDisplay';


class CityContainer extends React.Component{
  render(){
    return(
        <div className="ui two column row segment" style={{height:"50vh"}}>
          <h1 className="ui header centered">
            {this.props.cityName} - {this.props.country.country}
          </h1>
          <MapDisplay coords={this.props.geometry} />
          <div className="ui header centered segment">
          <p>
          {this.props.address}
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
    country: state.currentCity.sys,
    address: state.cityCoords.formatted_address,
    geometry:state.cityCoords.geometry
  }
}

export default connect(mapStateToProps, {fetchGeocode})(CityContainer);