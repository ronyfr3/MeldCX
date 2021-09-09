import { combineReducers } from "redux";
import { deviceReducer } from "./reducers/deviceReducer";

export const reducers = combineReducers({
  deviceState: deviceReducer,
});
