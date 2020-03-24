import React from 'react';
import {connect} from 'react-redux';



export default class WeatherDetails extends React.Component{

  render(){

    if(!this.props.cityName){
     return <h1>Please Search City</h1>
    }

    return(
      <div>
      <h1>Weather-Details</h1>
      <h1 class="ui header">
      {this.props.cityName}
      </h1>
      <p>
      lat : {this.props.coord.lat}
      <br/>
      lon : {this.props.coord.lon}
      </p>
      <p>
      {this.props.weather}
      </p>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    city: state.currentCity,
    cityName: state.currentCity.name,
    coord: state.currentCity.coord,
    weather: state.currentCity.weather
  }
}
export default connect(mapStateToProps)(WeatherDetails);