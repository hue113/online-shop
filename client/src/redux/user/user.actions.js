import axios from 'axios';
import { UserActionTypes } from './user.types';
import { toast } from 'react-toastify';

export const setCurrentUser = (user) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

export const getCurrentUser = () => {
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

export const updateUserInfo = (user) => {
  return (dispatch) => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      return axios
        .patch(`${process.env.REACT_APP_API_URL}/api/v1/users/updateMe`, user, {
          headers: {
            Authorization: 'Bearer ' + jwt,
          },
        })
        .then((res) => {
          // document.cookie = `jwt=${res.data.token}`;
          const user = res.data.data.user;
          console.log(res);
          dispatch(setCurrentUser(user));
          toast('Account was updated successfully!');
        })
        .catch((e) => {
          console.log(e);
          toast.error('Error happened! Please try again');
        });
    }
  };
};

export const updateUserPassword = (passwords) => {
  return (dispatch) => {
    const jwt = document.cookie.split('=')[1];
    if (jwt) {
      return axios
        .patch(
          `${process.env.REACT_APP_API_URL}/api/v1/users/updatePassword`,
          passwords,
          {
            headers: {
              Authorization: 'Bearer ' + jwt,
            },
          },
        )
        .then((res) => {
          console.log(res);
          if (res.status === 401) {
            return toast.error(res.data.message);
          } else if (res.status === 400) {
            return toast.error(res.data.message);
          } else {
            // console.log(res);
            document.cookie += '=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            document.cookie = `jwt=${res.data.token}`;
            const user = res.data.user;
            dispatch(setCurrentUser(user));
            toast('Password was changed successfully!');
          }
        })
        .catch((e) => {
          console.log(e);
          toast.error('There was something wrong! Please try again!');
        });
    }
  };
};
