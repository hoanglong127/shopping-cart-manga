import React, { useEffect } from "react";
import { Fragment } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import ProductDetail from "../../components/ProductDetail";
import ProductList from "../../components/ProductList";
import { setSelectedProductAction } from "../../redux/actions/productAction";
import "./detail.scss";

const Detail = (props) => {
  const { productList, selectedProduct } = useSelector(
    (state) => state.productReducer
  );
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0 });
    dispatch(setSelectedProductAction(id));
  }, [id]);

  const renderRelatedProducts = () => {
    const relatedProducts = productList.filter(
      (item) =>
        item.maDanhMuc === selectedProduct.maDanhMuc &&
        item.ma !== selectedProduct.ma
    );

    return <ProductList products={relatedProducts} col={4} />;
  };

  return (
    <Fragment>
      {selectedProduct && (
        <div className="detail">
          <div className="container-fluid">
            <ProductDetail product={selectedProduct} />
            <div className="related-products">
              <h4>Sản phẩm liên quan</h4>
              {renderRelatedProducts()}
            </div>
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Detail;
