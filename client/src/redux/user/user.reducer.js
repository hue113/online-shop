import { UserActionTypes } from './user.types';

const INITIAL_STATE = {
  toggleLogout: false,
  currentUser: null,
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case UserActionTypes.TOOGLE_LOGOUT:
      return {
        ...state,
        toggleLogout: !state.toggleLogout,
      };
    case UserActionTypes.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
