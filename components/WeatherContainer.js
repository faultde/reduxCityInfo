import React from 'react';
import {connect} from 'react-redux';

let cloud = "https://doc-04-98-docs.googleusercontent.com/docs/securesc/p7bdvu7f8n3fj0ipdo24af359k1efcep/46lpuh92e79v2tlajo46nbkps957f3ch/1585963425000/14729612505334471972/14729612505334471972/1tOXqrsleBD0CE1opZkOqpV6cwQhX59Tc?authuser=0";

let sun = "https://doc-00-98-docs.googleusercontent.com/docs/securesc/p7bdvu7f8n3fj0ipdo24af359k1efcep/dsepk89dn86lfgvpa1qdvccfgbk06sf7/1585962000000/14729612505334471972/14729612505334471972/1iwR0Lpubbv_uk21Karje92DJ_6kjR3qE?authuser=0"

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
          <img class="ui centered medium image segment" src={cloud}/>
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