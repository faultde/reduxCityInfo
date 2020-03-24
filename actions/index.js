//actions
import openWeather from '../apis/openWeather';


//api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}
//weather?q=chicago&appid=9d0768038f52f1b47a7f998a6c7c919f
export const fetchWeather = (cityName) => {
  return async (dispatch)=>{
    const clientId = '9d0768038f52f1b47a7f998a6c7c919f';
    const response = await openWeather.get(`weather?q=${cityName}&appid=${clientId}` );

    dispatch({
      type: 'FETCH_WEATHER',
      payload: response.data
    })
  }
}