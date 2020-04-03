//reducers
import {combineReducers} from "redux";

const currentCityReducer = (state = "", action) => {
switch(action.type){
  case 'FETCH_WEATHER':
    return action.payload
  default:
    return state;
}
};

const cityCoordsReducer = (state = "", action) => {
switch(action.type){
  case 'FETCH_GEOCODE':
    return action.payload
  default:
    return state;
}
};

export default combineReducers({
  currentCity: currentCityReducer,
  cityCoords: cityCoordsReducer
})