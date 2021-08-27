import {
  SEARCH_PRODUCT,
  SET_SELECTED_PRODUCT,
  SORT_PRODUCT,
} from "../types/productType";

export const setSelectedProductAction = (id) => ({
  type: SET_SELECTED_PRODUCT,
  payload: id,
});

export const searchProductAction = (key) => ({
  type: SEARCH_PRODUCT,
  payload: key,
});

export const sortProductAction = (value) => ({
  type: SORT_PRODUCT,
  payload: value,
});
