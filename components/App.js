import React from 'react';
import SearchBar from './SearchBar';
import InfoContainer from './InfoContainer';

export default class App extends React.Component{
  render(){
    return (
      <div className="ui two column grid container"> 
      <h1 className="header row centered">ReduxCityInfo</h1>
        <SearchBar/>
        <InfoContainer/>
      </div>
    )
}
}