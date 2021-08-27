import { SET_SELECTED_CATEGORY } from "../types/categoryType";

export const setSelectedCategoryAction = (id) => ({
  type: SET_SELECTED_CATEGORY,
  payload: id,
});
