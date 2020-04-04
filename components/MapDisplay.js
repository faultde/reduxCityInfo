import React from 'react';

export default class MapDisplay extends React.Component{
  render(){
    return(
       <img className="ui centered medium image segment" id="map" src={this.props.map}/>
    )
  }
}
