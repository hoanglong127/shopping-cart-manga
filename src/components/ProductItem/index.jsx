import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { addToCartAction } from "../../redux/actions/cartAction";
import "./productItem.scss";

const ProductItem = (props) => {
  const { ma, hinhAnh, biDanh, tenSanPham, tacGia, gia } = props.product;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartAction(props.product, 1));
    toast.success("Thêm vào giỏ hàng thành công", { autoClose: 1500 });
  };

  return (
    <div className="product-item">
      <Link to={`/sanpham/${ma}-${biDanh}`} className="product-item__image">
        <img src={hinhAnh} alt={biDanh} />
      </Link>
      <Link to={`/sanpham/${ma}-${biDanh}`}>
        <h5 className="product-item__name">{tenSanPham}</h5>
      </Link>
      <p className="product-item__author">{tacGia}</p>
      <div className="d-flex justify-content-between align-items-center">
        <p className="product-item__price">{gia.toLocaleString()} đ</p>
        <button className="product-item__cart" onClick={handleAddToCart}>
          <i className="fa fa-cart-plus"></i>
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
