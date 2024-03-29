import { CategoryActionTypes } from './category.types';
import axios from 'axios';

export const fetchCategoriesStart = () => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_SUCCESS,
  payload: categories,
});

export const fetchCategoriesFailure = (errorMessage) => ({
  type: CategoryActionTypes.FETCH_CATEGORIES_FAILURE,
  payload: errorMessage,
});

export const fetchCategoriesStartAsync = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/shops`)
      .then((res) => {
        const categories = res.data.data;
        // console.log(categories);
        dispatch(fetchCategoriesSuccess(categories));
      })
      .catch((error) => dispatch(fetchCategoriesFailure(error.message)));
  };
};
