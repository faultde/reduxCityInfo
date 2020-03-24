import React from 'react';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';

export default class App extends React.Component{
  render(){
    return (
      <div className="ui container"> <h1>Weather App</h1>
        <SearchBar/>
        <WeatherDetails/>
      </div>
    )
}
}