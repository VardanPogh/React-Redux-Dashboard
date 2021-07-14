import { combineReducers } from "redux";
import Auth from "./Auth";
import Theme from "./Theme";
import User from "./User";

const reducers = combineReducers({
  theme: Theme,
  auth: Auth,
  user: User,
});

export default reducers;
