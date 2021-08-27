import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  deleteCartItemAction,
  updateQuantityCartItemAction,
} from "../../redux/actions/cartAction";
import "./cart.scss";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scroll({ top: 0 });
  }, []);

  const handleUpdateQuantityCartItem = (id, value) => {
    dispatch(updateQuantityCartItemAction(id, value));
  };

  const handleDeleteCartItem = (id) => {
    dispatch(deleteCartItemAction(id));
    toast.success("Xoá sản phẩm thành công", { autoClose: 1500 });
  };

  const renderCart = () => {
    if (cart.length === 0) {
      return (
        <tr className="text-center">
          <td colSpan="6" className="p-5">
            Không có sản phẩm
          </td>
        </tr>
      );
    }

    return cart.map((item) => {
      const { ma, hinhAnh, biDanh, tenSanPham, gia } = item.product;

      return (
        <tr key={ma}>
          <td>
            <img src={hinhAnh} alt={biDanh} className="cart__image" />
          </td>
          <td>{tenSanPham}</td>
          <td className="cart__quantity">
            <button
              className="cart__decrease"
              onClick={() => handleUpdateQuantityCartItem(ma, false)}
            >
              <i className="fa fa-minus"></i>
            </button>
            <span>{item.quantity}</span>
            <button
              className="cart__increase"
              onClick={() => handleUpdateQuantityCartItem(ma, true)}
            >
              <i className="fa fa-plus"></i>
            </button>
          </td>
          <td className="cart__price">{gia.toLocaleString()} đ</td>
          <td className="cart__price">
            {(gia * item.quantity).toLocaleString()} đ
          </td>
          <td>
            <button
              className="cart__delete"
              onClick={() => handleDeleteCartItem(ma)}
            >
              <i className="fa fa-trash-alt"></i>
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <div className="cart">
      <div className="container">
        <div className="cart__content">
          <h3 className="cart__title">Giỏ hàng</h3>
          <table className="table text-center">
            <thead className="thead-light">
              <tr>
                <th>Hình ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá</th>
                <th>Thành tiền</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>{renderCart()}</tbody>
            <tfoot>
              <tr>
                <td colSpan="4"></td>
                <td colSpan="2" className="cart__total">
                  Tổng tiền:{" "}
                  <span>
                    {cart
                      .reduce(
                        (total, item) =>
                          (total += item.product.gia * item.quantity),
                        0
                      )
                      .toLocaleString()}{" "}
                    đ
                  </span>
                </td>
              </tr>
            </tfoot>
          </table>
          <div className="cart__checkout">
            <button>Thanh toán</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
