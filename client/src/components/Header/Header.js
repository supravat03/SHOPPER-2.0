import React, { useEffect, useState } from "react";
import { CartContext } from "../../providers/Context";
import './Header.css';
import { removeAccessToken } from "../../utils/token.utils";
import { logOut } from "../../core/services/api/auth";
import { SuccessModal } from "../Modal/SuccessModal";
import { getCartItem } from "../../utils/cart.utils";


export const Header = (props) => {


  const [successModalShow, setSuccessModalShow] = React.useState(false);
  const [successModalMessage, setSuccessModalMessage] = useState('');

  // let login = localStorage.getItem('login');


  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   setIsLoggedIn(login);
  // }, [login])


  const logOutHandler = async (e) => {
    e.preventDefault();
    try {
      const data = await logOut();
      // console.log(data);
      removeAccessToken();
      localStorage.removeItem('login');
      setSuccessModalMessage(data.message);
      setSuccessModalShow(true);

    } catch (error) {
      console.log('Logout handler error:', error);
    }

  }

  const {loggedInState}= CartContext();
  

  return (
    <header>


      <nav className="navbar navbar-expand-md navbar-light bg-light fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <h2>Shopper</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto me-auto mb-2 mb-lg-10">
              <li className="nav-item">
                <a className="nav-link active text-uppercase" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/shop">Shop</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/">Collection</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/post">Post Add</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-uppercase" href="/">Contact Us</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-uppercase" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li>
                    <a className="dropdown-item" href="/">Something else here</a>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="d-flex justify-content-between ms-auto me-auto">
              <div className="dropdown">

                <i className="fas fa-user fa-lg dropdown-toggle navbar-icon" data-bs-toggle="dropdown"
                  aria-expanded="false"></i>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    {
                      loggedInState.isLoggedIn? <a onClick={logOutHandler} className="dropdown-item" href="/login">Logout</a> :
                        <a className="dropdown-item" href="/login">Login</a>
                    }
                    {/* <a className="dropdown-item" href="/login">Login</a> */}
                  </li>
                  <li><a className="dropdown-item" href="/login">Register</a></li>
                  <li><a className="dropdown-item" href="/dashboard">My Account</a></li>
                </ul>
              </div>
              <i className="fas fa-heart fa-lg navbar-icon"></i>
              {/* <i class="bi bi-heart-fill navbar-icon"></i> */}
              <a href="/cart">
              
                <i className="fas fa-shopping-cart fa-lg navbar-icon position-relative">
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                    {/* {cartState.length} */}
                    {loggedInState.isLoggedIn ? getCartItem().length :0}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </i>
                
              </a>
            </div>
          </div>
        </div>
      </nav>

      <SuccessModal show={successModalShow} onHide={() => { setSuccessModalShow(false); window.location.reload(); }}
        modalmessage={successModalMessage} />
    </header>
  )
}