import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedCategoryAction } from "../../redux/actions/categoryAction";
import "./category.scss";

const Category = () => {
  const { categoryList, selectedCategory } = useSelector(
    (state) => state.categoryReducer
  );
  const dispatch = useDispatch();

  const handleSelectedCategory = (id) => {
    dispatch(setSelectedCategoryAction(id));
  };

  const renderCategorieList = () => {
    return categoryList.map((item) => (
      <li key={item.ma} className="category__item">
        <button
          className={`category__button ${
            item.ma === selectedCategory ? "category__button--active" : ""
          }`}
          onClick={() => handleSelectedCategory(item.ma)}
        >
          {item.tenDanhMuc}
        </button>
      </li>
    ));
  };

  return (
    <div className="category">
      <h4 className="category__title">
        <i className="fa fa-list"></i> Danh mục
      </h4>
      <ul className="category__list">
        <li className="category__item">
          <button
            className={`category__button ${
              !selectedCategory && "category__button--active"
            }`}
            onClick={() => handleSelectedCategory(null)}
          >
            Tất cả sản phẩm
          </button>
        </li>
        {renderCategorieList()}
      </ul>
    </div>
  );
};

export default Category;
