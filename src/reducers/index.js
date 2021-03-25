import { combineReducers } from "redux";
import gamesReducer from "./gamesReducers";
import userReducer from "./userReducer";
import gameDetailsReducer from "./gameDetailsReducer";

const rootReducer = combineReducers({
  games: gamesReducer,
  user: userReducer,
  details: gameDetailsReducer,
});

export default rootReducer;
