import { BrowserRouter, Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.scss";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getCartAction, saveCartAction } from "./redux/actions/cartAction";
import Search from "./pages/Search";
import ScrollToTop from "./components/ScrollToTop";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartAction());
  }, []);

  useEffect(() => {
    dispatch(saveCartAction());
  }, [cart]);

  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Switch>
          <Route path="/sanpham/:id-:biDanh" component={Detail} />
          <Route path="/giohang" component={Cart} />
          <Route path="/timkiem" component={Search} />
          <Route exact path="/" component={Home} />
          <Route path="/:something" component={PageNotFound} />
        </Switch>

        <Footer />
        <ScrollToTop />
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;
