import axios from 'axios';


export const fetchGeocode = (coords) =>{


  axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
    params: {
      latlng: coords,//"29.95,-90.08"
      key: 'AIzaSyCoBX84ZD7aE_tkvLT4faEUfX6qF69eSAA'
    }
  }).then(function(response){
    console.log(response);s
  }).catch(function(error){
    // console.log(error)
  })
  }