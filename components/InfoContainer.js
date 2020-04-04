import React from 'react';
import {connect} from 'react-redux';

import {fetchGeocode} from '../actions';
import CityContainer from './CityContainer';
import WeatherContainer from './WeatherContainer';


class InfoContainer extends React.Component{
  state = {
    time: 'loading'
  }

  render(){
    if(!this.props.cityName){
     return <h1 className="ui header row centered">Please Search City</h1>
    }

    return(
      <div className="ui fluid row">
        <CityContainer/>
        <WeatherContainer/>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cityName: state.currentCity.name,
  }
}
export default connect(mapStateToProps)(InfoContainer);