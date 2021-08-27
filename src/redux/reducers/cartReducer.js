import {
  ADD_TO_CART,
  DELETE_CART_ITEM,
  GET_CART,
  SAVE_CART,
  UPDATE_QUANTITY_CART_ITEM,
} from "../types/cartType";

const initialState = {
  cart: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CART: {
      const mangaCart = JSON.parse(localStorage.getItem("mangaCart"));
      if (!mangaCart) return state;

      return { ...state, cart: mangaCart };
    }
    case SAVE_CART: {
      localStorage.setItem("mangaCart", JSON.stringify(state.cart));
      return { ...state };
    }
    case ADD_TO_CART: {
      const cloneCart = [...state.cart];
      const foundIndex = cloneCart.findIndex(
        (item) => item.product.ma === action.payload.product.ma
      );

      if (foundIndex === -1) {
        cloneCart.push(action.payload);
      } else {
        cloneCart[foundIndex].quantity += action.payload.quantity;
      }

      return { ...state, cart: cloneCart };
    }
    case UPDATE_QUANTITY_CART_ITEM: {
      const cloneCart = [...state.cart];
      const foundIndex = cloneCart.findIndex(
        (item) => item.product.ma === action.payload.id
      );

      if (foundIndex === -1) return state;

      if (action.payload.value) {
        cloneCart[foundIndex].quantity++;
      } else {
        if (cloneCart[foundIndex].quantity > 1)
          cloneCart[foundIndex].quantity--;
      }

      return { ...state, cart: cloneCart };
    }
    case DELETE_CART_ITEM: {
      const cloneCart = [...state.cart];
      const foundIndex = cloneCart.findIndex(
        (item) => item.product.ma === action.payload
      );

      if (foundIndex === -1) return state;

      cloneCart.splice(foundIndex, 1);

      return { ...state, cart: cloneCart };
    }
    default:
      return state;
  }
};

export default cartReducer;
