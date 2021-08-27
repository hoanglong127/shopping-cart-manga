import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { searchProductAction } from "../../redux/actions/productAction";
import "./header.scss";

const Header = (props) => {
  const [keySearch, setKeySearch] = useState("");
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleChangeKeySearch = (e) => {
    setKeySearch(e.target.value);
  };

  const handleSearchProduct = (e) => {
    e.preventDefault();

    if (keySearch.trim() === "") {
      return toast.error("Vui lòng nhập tên sản phẩm", { autoClose: 2000 });
    }

    dispatch(searchProductAction(keySearch.trim()));
    history.push("/timkiem");
    setKeySearch("");
  };

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row align-items-center">
          <div className="col-3">
            <Link to="/" className="header__logo">
              Manga<span>World</span>
            </Link>
          </div>
          <div className="col-6">
            <form className="header__search" onSubmit={handleSearchProduct}>
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm"
                value={keySearch}
                onChange={handleChangeKeySearch}
              />
              <i className="fa fa-search"></i>
            </form>
          </div>
          <div className="col-3">
            <Link to="/giohang" className="header__cart">
              Giỏ hàng <i className="fa fa-shopping-cart"></i>{" "}
              <span>{cart.length}</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
