import { all } from "redux-saga/effects";
import Auth from "./Auth";
import User from "./User";

export default function* rootSaga(getState) {
  yield all([Auth(), User()]);
}
