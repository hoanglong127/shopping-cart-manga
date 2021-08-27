import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Category from "../../components/Category";
import Filter from "../../components/Filter";
import ProductList from "../../components/ProductList";
import "./home.scss";

const Home = () => {
  const products = useSelector((state) => state.productReducer.productList);
  const selectedCategory = useSelector(
    (state) => state.categoryReducer.selectedCategory
  );

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [products]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCategory]);

  return (
    <div className="home">
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Category />
          </div>
          <div className="col-9">
            <div className="home__product">
              <Filter />
              <ProductList
                products={
                  selectedCategory
                    ? products.filter(
                        (item) => item.maDanhMuc === selectedCategory
                      )
                    : products
                }
                col={3}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
