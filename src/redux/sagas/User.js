import { all, takeEvery, put, fork, call } from "redux-saga/effects";
import {
  GET_PROFILE,
  SAVED_PROFILE,
  SAVING_PROFILE,
  SHOW_LOADING,
} from "../constants/User";
import { saveProfile, getProfile, showLoading } from "../actions/User";
import { auth } from "../../auth/FirebaseAuth";

import UserService from "services/UserService";

export function* profileSave() {
  console.log('CALLing')
  yield takeEvery(SAVING_PROFILE, function* ({ payload }) {
    const { data } = payload;
    try {
      const res = yield call(
        UserService.saveUserProfile,
        auth.currentUser.uid,
        data
      );
      console.log("res", res);
      //   if (user.message) {
      //     yield put(showAuthMessage(user.message));
      //   } else {
      //     localStorage.setItem(AUTH_TOKEN, user.user.uid);
      //     yield put(authenticated(user.user.uid));
      //   }
    } catch (err) {
      console.log("ERROR", err);
      //   yield put(showAuthMessage(err));
    }
  });
}

export default function* rootSaga() {
  yield all([fork(profileSave)]);
}
