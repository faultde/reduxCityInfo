import axios from 'axios';


export const fetchGeocode = (coords) =>{


  axios.get('https://maps.googleapis.com/maps/api/geocode/json?',{
    params: {
      latlng: coords,//"29.95,-90.08"
      key: 'AIzaSyCGc0rNtQm9zOpN0lSW0yuOv-9OJrVW2PI'
    }
  }).then(function(response){
    console.log(response);s
  }).catch(function(error){
    console.log(error)
  })
  }