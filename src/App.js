import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/authToken";
import { setCurrentUser, logoutUser } from "./action/auth";
import ScrollTop from "./components/scrollTop";
import localforage from "localforage";
import { Provider } from "react-redux";
import store from "./store/store";
import PrivateRoute from "./config/privateRoute";
import Home from "./pages/Home";
import About from "./pages/About";
import Signin from "./pages/SignIn";
import Signup from "./pages/Signup";
import Cart from "./components/cart/Cart";
import Detail from "./components/detail/Detail";
import Footer from "./components/Footer";
import ItemSell from "./components/ItemSelling/Sell";
import Tabel from "./components/form/Form";
import ProductList from "./components/productDetails";
import NavMenu from "./components/Navbar.js";
// import { Tab } from "react-bootstrap";
// import Carousel from "./components/carousel/Carousel";
// import Login from "./components/login/Login2";
// import MiniCarousel from "./components/carousel/MiniCarousel";
// import Register from "./components/register/Register";
// import NavMenu from './components/navbar/navbar'
// import signIn from "./components/signIn";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}
try {
  const fun = async () => {
    console.log("halo");
    const val = await localforage.getItem("keranjang");
    window.dataKeranjang = val;
  };
  fun();
} catch {
  console.error("belum bisa pakai localforage");
}

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <ScrollTop>
            <div>
              <NavMenu />
            </div>
            <div>
              <Route exact path="/" component={Home} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/signin" component={Signin} />
              <Route exact path="/about" component={About} />
              <Route path="/item/:id" component={Detail} />
              <Route path="/cart" component={Cart} />
              <Route path="/checkout" component={Tabel} />
              <Route path="/sell" component={ItemSell} />
              <Switch>
                <PrivateRoute
                  exact
                  path="/details/detail/:id"
                  component={ProductList}
                />
              </Switch>
            </div>
            <Footer />
          </ScrollTop>
        </Router>
      </Provider>
    );
  }
}
