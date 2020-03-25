import React from "react";
import {connect} from 'react-redux';
import { fetchWeather }  from '../actions';


export default class SearchBar extends React.Component{
  state = {
    textValue: ''
  }
  componentDidMount(){
    
  }

  render(){
    console.log(this.props.cityName)
    return (
        <div className="ui fluid action input row divider">
          <input type="text" placeholder="Search..." 
                 onChange={(e)=>this.setState({textValue: e.target.value})}/>
          <div className="ui button" onClick={()=> this.props.fetchWeather(this.state.textValue)}>Search</div>
      </div>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cityName: state.currentCity
  }
}
export default connect(mapStateToProps, {fetchWeather})(SearchBar);