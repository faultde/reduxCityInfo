import React from 'react';
import SearchBar from './SearchBar';
import WeatherDetails from './WeatherDetails';

export default class App extends React.Component{
  render(){
    return (
      <div className="ui two column grid container"> 
      <h1 className="header row centered">ReduxCityInfo</h1>
        <SearchBar/>
        <WeatherDetails/>
      </div>
    )
}
}