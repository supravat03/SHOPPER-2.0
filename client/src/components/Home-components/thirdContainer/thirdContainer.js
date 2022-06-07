import React from "react";
import './thirdContainer.css'

export const ThirdContainer = () => {
  return (
    <div className="container thirdContainer">
      <div className="row">
        <div className="col-lg-3 col-md-3 col-sm-12 tac" >
          <div className="support-wrap mb-30">
            <div className="support-icon"><img className="animated" src="./pics/support-1.png" alt="" /></div>
            <div className="support-content">
              <h5>Free Shipping</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3  col-md-3 col-sm-12 tac">
          <div className="support-wrap mb-30">
            <div className="support-icon"><img className="animated" src="./pics/support-2.png" alt="" /></div>
            <div className="support-content">
              <h5>Support 24/7</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 tac">
          <div className="support-wrap mb-30">
            <div className="support-icon"><img className="animated" src="./pics/support-3.png" alt="" /></div>
            <div className="support-content">
              <h5>Money Return</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-12 tac">
          <div className="support-wrap mb-30">
            <div className="support-icon"><img className="animated" src="./pics/support-4.png" alt="" /></div>
            <div className="support-content">
              <h5>Order Discount</h5>
              <p>Free shipping on all order</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}