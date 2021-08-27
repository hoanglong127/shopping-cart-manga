import productData from "../../data/products.json";
import {
  SEARCH_PRODUCT,
  SET_SELECTED_PRODUCT,
  SORT_PRODUCT,
} from "../types/productType";

const initialState = {
  productList: productData.reverse(),
  selectedProduct: null,
  searchProducts: [],
  keySearch: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SELECTED_PRODUCT: {
      const foundIndex = state.productList.findIndex(
        (item) => item.ma === +action.payload
      );

      if (foundIndex !== -1) {
        state.selectedProduct = state.productList[foundIndex];
      }

      return { ...state };
    }
    case SEARCH_PRODUCT: {
      const newSearchProducts = state.productList.filter((item) =>
        item.tenSanPham
          .toLocaleLowerCase()
          .includes(action.payload.toLocaleLowerCase())
      );

      return {
        ...state,
        searchProducts: newSearchProducts,
        keySearch: action.payload,
      };
    }
    case SORT_PRODUCT: {
      let cloneProductList = [...state.productList];

      switch (action.payload) {
        case "increase":
          cloneProductList.sort((item1, item2) => item1.gia - item2.gia);
          break;
        case "decrease":
          cloneProductList.sort((item1, item2) => item2.gia - item1.gia);
          break;
        default:
          cloneProductList = productData;
      }

      return { ...state, productList: cloneProductList };
    }
    default:
      return state;
  }
};

export default productReducer;
