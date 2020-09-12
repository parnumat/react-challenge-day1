import reduxReducer from "./reduxMainApp.reducer";
import { combineReducers } from "redux";
import box1Reducer from "./box1.reducer";

export default combineReducers({
  reduxReducer: reduxReducer,
  box1Reducer: box1Reducer,
});
