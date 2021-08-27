import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCartAction } from "../../redux/actions/cartAction";
import "./productDetail.scss";

const ProductDetail = (props) => {
  const {
    ma,
    hinhAnh,
    biDanh,
    tenSanPham,
    gia,
    nhaCungCap,
    tacGia,
    ngayPhatHanh,
    moTa,
  } = props.product;
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCartAction(props.product, quantity));
    toast.success("Thêm vào giỏ hàng thành công", { autoClose: 1500 });
  };

  const handleChangeQuantity = (value) => {
    if (value) {
      setQuantity(quantity + 1);
    } else {
      if (quantity > 1) {
        setQuantity(quantity - 1);
      }
    }
  };

  return (
    <div className="product-detail">
      <div className="row">
        <div className="col-4">
          <img
            src={hinhAnh}
            alt={biDanh}
            className="product-detail__image w-100"
          />
        </div>
        <div className="col-8">
          <h3 className="product-detail__name">{tenSanPham}</h3>
          <p className="product-detail__price">{gia.toLocaleString()} đồng</p>
          <p>
            <span>Mã sản phẩm: </span>
            {ma}
          </p>
          <p>
            <span>Nhà cung cấp: </span>
            {nhaCungCap}
          </p>
          <p>
            <span>Tác giả: </span>
            {tacGia}
          </p>
          <p>
            <span>Ngày phát hành: </span>
            {ngayPhatHanh}
          </p>
          <p>
            <span>Mô tả: </span>
            {moTa}
          </p>
          <div className="product-detail__quantity">
            <span>Số lượng: </span>
            <button
              className="decrease"
              onClick={() => handleChangeQuantity(false)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <span>{quantity}</span>
            <button
              className="increase"
              onClick={() => handleChangeQuantity(true)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <button className="product-detail__cart" onClick={handleAddToCart}>
            <i className="fa fa-cart-plus"></i> Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
