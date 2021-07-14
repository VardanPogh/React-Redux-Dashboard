import {
  SHOW_LOADING,
  GET_PROFILE,
  SAVED_PROFILE,
  SAVING_PROFILE,
} from "../constants/User";

export const saveProfile = (data) => {
  console.log("data", data);
  return {
    type: SAVING_PROFILE,
    payload: data,
  };
};
export const savedProfile = (message) => {
  return {
    type: SAVED_PROFILE,
    message,
  };
};

export const getProfile = (id) => {
  return {
    type: GET_PROFILE,
    id,
  };
};

// export const showMessage = (message) => {
//   return {
//     type: SHOW_MESSAGE,
//     message,
//   };
// };

export const showLoading = () => {
  console.log('loading')
  return {
    type: SHOW_LOADING,
  };
};
