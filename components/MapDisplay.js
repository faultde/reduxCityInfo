import React from 'react';
import GoogleMapReact from 'google-map-react';

export default class MapDisplay extends React.Component{
  render(){
    if(!this.props.coords){
      return(<div style={{ height: '50%', width: '100%' }}>
              <h1 className="ui header">...Loading</h1>
            </div> )
    }else{

         return(
        <div style={{ height: '50%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyCoBX84ZD7aE_tkvLT4faEUfX6qF69eSAA" }}
          center={{lat:this.props.coords.location.lat,lng:this.props.coords.location.lng}}
          defaultZoom={13}
        >
        </GoogleMapReact>
      </div>
    )
    }
  }
}
