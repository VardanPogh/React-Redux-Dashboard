import {
  GET_PROFILE,
  SAVED_PROFILE,
  SAVING_PROFILE,
  SHOW_LOADING,
} from "../constants/User";

const initState = {
  loading: false,
  message: "",
  showMessage: false,
  redirect: "",
  user: {},
};

const user = (state = initState, action) => {
  console.log('--actions', action);
  switch (action.type) {
    case SAVED_PROFILE:
      return {
        ...state,
        loading: false,
        redirect: "/",
      };
    case GET_PROFILE:
      return {
        ...state,
        loading: false,
        redirect: "/",
        user: action.user,
      };
    case SAVING_PROFILE:
      return {
        ...state,
        loading: false,
        redirect: "/",
      };
    case SHOW_LOADING: {
      return {
        ...state,
        loading: true,
      };
    }
    default:
      return state;
  }
};

export default user;
