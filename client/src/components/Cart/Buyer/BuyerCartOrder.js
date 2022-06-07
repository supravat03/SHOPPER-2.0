import React from "react";
import { CartContext } from "../../../providers/Context";

export const BuyerCartOrder = () => {

    
    const {cartState, dispatch} = CartContext();
  




    return (
        <div className="tab-pane fade" id="order-review" role="tabpanel" aria-labelledby="nav-contact-tab" style={{ textAlign: 'initial' }}>


            <div className="mb-5">
                <div className="cart">
                    <div className="cart-wrapper">
                        <div className="cart-header text-center">
                            <div className="row">
                                <div className="col-6">Item</div>
                                <div className="col-2">Price</div>
                                <div className="col-2">Quantity</div>
                                {/* <div className="col-2">Total</div> */}
                            </div>
                        </div>
                        <div className="cart-body">

                            {
                                cartState.map((item, index) => {
                                    return (
                                        <div key={item.product_id} className="cart-item">
                                            <div className="row d-flex align-items-center text-center">
                                                <div className="col-6">
                                                    <div className="d-flex align-items-center">
                                                        <a href={"/shop/" + item.product_id}><img className="cart-item-img"
                                                            src={`data:image/png;base64,${item.image_1}`}
                                                            alt="..." /></a>
                                                        <div className="cart-title text-start" style={{ marginLeft: '20px' }}>
                                                            <a className="text-uppercase text-dark" href="detail.html">
                                                                <strong>{item.product_name}</strong>
                                                            </a>
                                                            <br />
                                                            <span className="text-muted text-sm">Size: Large</span><br />
                                                            <span className="text-muted text-sm">Colour: Green</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-2">₹ {item.product_price} </div>
                                                <div className="col-2">
                                                    <div class="btn-group me-2" role="group" aria-label="Second group">
                                                        <button onClick={() => { dispatch({ type: 'increment', payload: item.product_id }); }} type="button" class="btn btn-secondary">+</button>
                                                        <button type="button" class="btn btn-secondary" >{item.qty}</button>
                                                        <button onClick={() => { dispatch({ type: 'decrement', payload: item.product_id }); }} type="button" class="btn btn-secondary">-</button>
                                                    </div>
                                                </div>
                                                {/* <div className="col-1 text-center">₹ {item.product_price}</div> */}
                                                <div className="col-2 text-center">
                                                    <button onClick={() => { dispatch({ type:'remove_from_cart', payload: item.product_id }); }} type="button" class="btn btn-secondary">
                                                        <i className="fas fa-trash"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }


                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}