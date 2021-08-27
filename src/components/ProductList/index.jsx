import React, { useEffect, useState } from "react";
import ProductItem from "../ProductItem";
import "./productList.scss";

const ProductList = (props) => {
  const { products, col } = props;
  const [limit, setLimit] = useState(12);

  useEffect(() => {
    setLimit(12);
  }, [products]);

  const handleOnLoadMore = () => {
    setLimit(limit + limit);
  };

  const renderProducts = () => {
    return products.slice(0, limit).map((item) => (
      <div key={item.ma} className={`col-${12 / col}`}>
        <ProductItem product={item} />
      </div>
    ));
  };

  return (
    <div className="product-list">
      <div className="row">{renderProducts()}</div>
      {limit < products.length && (
        <div className="product-list__more">
          <button onClick={handleOnLoadMore}>Xem thêm</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
