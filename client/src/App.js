import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { PrivateRoute } from "./hooks/Private.Route";
import { PublicRoute } from "./hooks/Public.Route";
import { Home } from "./pages/Home/Home";
import { LogIn } from "./pages/Register-LogIn/LogIn";
import { Shop } from "./pages/Shop/Shop";
import { PostAdd } from "./pages/PostAdd/PostAdd";
import { Product_description } from "./pages/Product_Description/Product_description";
import { SellerDashboard } from "./pages/Dashboard/SellerDashboard";
import { BuyerDashboard } from "./pages/Dashboard/BuyerDashboard";
import { BuyerCart } from "./pages/Cart/BuyerCart";
import { SellerCart } from "./pages/Cart/SellerCart";

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {



 
  



  return (
    <Router>
      <div className="App">

          <Header />

          <ToastContainer  />
          <Switch>
            <PublicRoute path="/" exact component={Home} />
            <PublicRoute path="/login" exact component={LogIn}  />
            <PublicRoute path="/shop" exact component={Shop} />
            <PublicRoute path="/shop/:id"   component={ Product_description} />
            {/* <PublicRoute path="/cart" component={BuyerCart} /> */}
            <PrivateRoute path="/post" exact SellerComponent={PostAdd}  />
            <PrivateRoute path="/dashboard" exact  BuyerComponent={BuyerDashboard} SellerComponent={SellerDashboard}  />
            <PrivateRoute path="/cart" exact  BuyerComponent={BuyerCart} SellerComponent={SellerCart}  />
          </Switch>


        <Footer />

      </div>
    </Router>
  );
}

export default App;
