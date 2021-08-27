import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { sortProductAction } from "../../redux/actions/productAction";
import "./filter.scss";

const Filter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(sortProductAction("new"));
  }, []);

  const handleSortProduct = (e) => {
    dispatch(sortProductAction(e.target.value));
  };

  return (
    <div className="filter" onChange={handleSortProduct}>
      <select className="form-control">
        <option value="new">Sản phẩm mới</option>
        <option value="increase">Giá tăng dần</option>
        <option value="decrease">Giá giảm dần</option>
      </select>
    </div>
  );
};

export default Filter;
