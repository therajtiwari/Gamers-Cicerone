import { combineReducers } from "redux";
import gamesReducer from "./gamesReducers";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
});

export default rootReducer;
