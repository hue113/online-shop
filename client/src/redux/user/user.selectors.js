import { createSelector } from 'reselect';

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector([selectUser], (user) => user.currentUser);

export const selectToggleLogOut = createSelector(
  [selectUser],
  (user) => user.toggleLogout,
);

// export const selectCurrentUser = createSelector([selectUserInfo], (info) => info.user);
