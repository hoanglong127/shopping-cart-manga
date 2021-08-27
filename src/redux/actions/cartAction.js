import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  GET_CART,
  SAVE_CART,
  UPDATE_QUANTITY_CART_ITEM,
} from "../types/cartType";

export const getCartAction = () => ({
  type: GET_CART,
});

export const saveCartAction = () => ({
  type: SAVE_CART,
});

export const addToCartAction = (product, quantity) => ({
  type: ADD_TO_CART,
  payload: {
    product,
    quantity,
  },
});

export const updateQuantityCartItemAction = (id, value) => ({
  type: UPDATE_QUANTITY_CART_ITEM,
  payload: {
    id,
    value,
  },
});

export const deleteCartItemAction = (id) => ({
  type: DELETE_CART_ITEM,
  payload: id,
});
