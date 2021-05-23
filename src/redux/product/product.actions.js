import { ProductActionTypes } from './product.types';
import axios from 'axios';

export const fetchProductsStart = () => ({
  type: ProductActionTypes.FETCH_PRODUCTS_START,
});

export const fetchProductsSuccess = (collectionsMap) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_SUCCESS,
  payload: collectionsMap,
});

export const fetchProductsFailure = (errorMessage) => ({
  type: ProductActionTypes.FETCH_PRODUCTS_FAILURE,
  payload: errorMessage,
});

export const fetchProductsStartAsync = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/products`)
      .then((res) => {
        const products = res.data.data;
        // console.log(products);
        dispatch(fetchProductsSuccess(products));
      })
      .catch((error) => dispatch(fetchProductsFailure(error.message)));
  };
};
