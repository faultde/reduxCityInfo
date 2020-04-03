//actions
import openWeather from '../apis/openWeather';



export const fetchWeather = (cityName) => {
  return async (dispatch)=>{
    const clientId = '9d0768038f52f1b47a7f998a6c7c919f';
    const response = await openWeather.get(`weather?q=${cityName}&appid=${clientId}` );
    console.log("fetchWeather:" + response.data)

    dispatch({
      type: 'FETCH_WEATHER',
      payload: response.data
    })
  }
}


export const fetchGeocode = (coords) => {
  return async (dispatch)=>{
    const response = await geocode.get(`latlng=${coords}`);
    console.log("fetchGeocode: " + response)

    dispatch({
      type: 'FETCH_GEOCODE',
      payload: response.data
    })
  }
}