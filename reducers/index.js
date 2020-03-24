//reducers
import {combineReducers} from "redux";

const currentCityReducer = (state = '', action) => {
switch(action.type){
  case 'FETCH_WEATHER':
    return action.payload
  default:
    return state;
}
};

export default combineReducers({
  currentCity: currentCityReducer
})