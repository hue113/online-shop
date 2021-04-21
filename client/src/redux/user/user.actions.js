import axios from 'axios';
import { UserActionTypes } from './user.types';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const toggleLogOut = () => ({
  type: UserActionTypes.TOOGLE_LOGOUT,
});

export const getCurrentUser = () => {
  console.log('get current user');
  // const userInfo = JSON.parse(localStorage.getItem('user'));
  // if (userInfo) return setCurrentUser(userInfo.user);
  // else return setCurrentUser(null);
  return (dispatch) => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      return axios
        .get(`${process.env.REACT_APP_API_URL}/api/v1/users/jwt`, {
          headers: {
            Authorization: 'Bearer ' + jwt, //the token is a variable which holds the token
          },
        })
        .then((res) => {
          const user = res.data.data.user;
          dispatch(setCurrentUser(user));
        })
        .catch((e) => console.log(e));
    }

    // return axios
    //   .get(`${process.env.REACT_APP_API_URL}/api/v1/users/jwt/${jwt}`, {
    //     // .get(`${process.env.REACT_APP_API_URL}/api/v1/users/jwt`, {
    //     withCredentials: true,
    //     // credentials: 'include',
    //   })
  };
};
