import React from 'react';
import {connect} from 'react-redux';



export default class WeatherDetails extends React.Component{

  render(){

    if(!this.props.cityName){
     return <h1>Please Search City</h1>
    }

    return(
      <div>
      <h1>WeatherDetails</h1>
      <div>
      {this.props.cityName.name}
      </div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cityName: state.currentCity
  }
}
export default connect(mapStateToProps)(WeatherDetails);