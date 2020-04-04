import React from "react";
import {connect} from 'react-redux';
import moment from 'moment';
import {fetchGeocode} from '../actions';

let map = "https://doc-00-98-docs.googleusercontent.com/docs/securesc/p7bdvu7f8n3fj0ipdo24af359k1efcep/mn54d2m8dlqamgghg736pjae6feus24b/1585963350000/14729612505334471972/14729612505334471972/1ZBFFv_pV9ipHzSnCVyiTEaY6C6zBWc-2?authuser=0&nonce=ni22kpt72tkjc&user=14729612505334471972&hash=19jq5nhopbns9vud8ol25k3jibcir9cv";

class CityContainer extends React.Component{

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
    return(
        <div className="ui two column row segment">
          <h1 className="ui header centered segment ">
            {this.props.cityName} - {this.props.country.country}
          </h1>
          <img class="ui centered medium image segment" src={map}/>
          <div className="ui header centered segment">
          <p>
          LAT : {this.props.coord.lat} / / LON : {this.props.coord.lon}
          <br/>
          Current Time : { this.convertTime(this.props.time/3600)}
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

export default connect(mapStateToProps, {fetchGeocode})(CityContainer);