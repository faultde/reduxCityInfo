import React from "react";
import {connect} from 'react-redux';
import { fetchWeather }  from '../actions';



export default class SearchBar extends React.Component{
  state = {
    textValue: ''
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.fetchWeather(this.state.textValue)
  }

  render(){
    return (
        <form className="ui fluid action input row divider"
              style={{paddingBottom:50}}
              onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Search..." 
                 onChange={(e)=>this.setState({textValue: e.target.value})} 
                 />
          <div className="ui button" onClick={()=> this.props.fetchWeather(this.state.textValue)}>Search</div>
      </form>
    )
  }
}

const mapStateToProps = (state) =>{
  return {
    cityName: state.currentCity
  }
}
export default connect(mapStateToProps, {fetchWeather})(SearchBar);