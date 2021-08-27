import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../components/ProductItem";
import "./search.scss";

const Search = () => {
  const { searchProducts, keySearch } = useSelector(
    (state) => state.productReducer
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [keySearch]);

  const renderSearchProducts = () => {
    return searchProducts.map((item) => (
      <div key={item.ma} className="col-3">
        <ProductItem product={item} />
      </div>
    ));
  };

  return (
    <div className="search">
      <div className="container-fluid">
        <div className="search__content">
          <h3 className="search__title">
            Kết quả tìm kiếm cho "{keySearch}": {searchProducts.length} kết quả
          </h3>
          <div className="row">{renderSearchProducts()}</div>
        </div>
      </div>
    </div>
  );
};

export default Search;
