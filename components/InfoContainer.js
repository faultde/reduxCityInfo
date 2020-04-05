import React from 'react';
import {connect} from 'react-redux';

import {fetchGeocode} from '../actions';
import CityContainer from './CityContainer';
import WeatherContainer from './WeatherContainer';


class InfoContainer extends React.Component{
  state = {
    time: 'loading',
    lastCity: ''
  }
  componentDidUpdate() {
  console.log('test')
  this.props.fetchGeocode(`${this.props.coord.lat},${this.props.coord.lon}`)

    //  setInterval( () => {
    //   const newTime = this.convertTime(this.props.time/3600);
    //   this.setState({time: newTime })
    // }, 1000);
  }
  render(){
    if(!this.props.cityName){
     return <h1 className="ui header row centered" style={{color:'white'}}>Please Search City</h1>
    }

    return(
      <div className="ui sixteen wide column row centered segment">
        <CityContainer/>
        <WeatherContainer/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cityName: state.currentCity.name,
    coord: state.currentCity.coord
  }
}
export default connect(mapStateToProps, {fetchGeocode})(InfoContainer);