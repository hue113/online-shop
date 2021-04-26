import axios from 'axios';
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const getCurrentUser = () => {
  // const userInfo = JSON.parse(localStorage.getItem('user'));
  // if (userInfo) return setCurrentUser(userInfo.user);
  // else return setCurrentUser(null);
  return (dispatch) => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      return axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/users/me`, {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        .then((res) => {
          const user = res.data.data.user;
          dispatch(setCurrentUser(user));
        })
        .catch((e) => console.log(e));
    }
  };
};
