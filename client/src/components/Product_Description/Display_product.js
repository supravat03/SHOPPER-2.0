import React, {  useState } from "react";
import './Display_product.css'
import { CartContext } from "../../providers/Context";

export const DisplayProduct = ({ product }) => {


    const { dispatch}= CartContext();
    const [mainImg, setMainImg] = useState(product.image_1);

    // console.log(product.image_1);



    return (

        <section className="product-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-sm-12 product-image-col">

                        <div className="row">
                            <div className=" col-lg-3 col-md-3 col-sm-12 product-col-sm">
                                <div className="product-img-sm">
                                    <img onClick={() => setMainImg(product.image_1)} src={`data:image/png;base64,${product.image_1}`} alt="image1" />
                                </div>
                                <div className="product-img-sm">
                                    <img onClick={() => setMainImg(product.image_2)} src={`data:image/png;base64,${product.image_2}`} alt="image2" />
                                </div>
                                <div className="product-img-sm">
                                    <img onClick={() => setMainImg(product.image_3)} src={`data:image/png;base64,${product.image_3}`} alt="image3" />
                                </div>
                            </div>
                            <div className="col-lg-9 col-md-9 col-sm-12 product-col-lg">
                                <div className="product-img-lg layered-card">
                                    <img src={`data:image/jpeg;base64,${mainImg}`} alt="default" />
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="col-lg-5 col-md-5 col-sm-12 product-option-col">

                        <div className="product-option">

                            <div className="product-title">
                                <h3>{product.product_name}</h3>
                            </div>
                            <div className="product-price">
                                <span>₹ {product.product_price} </span>
                            </div>
                            <div className="product-summary">
                                <p>
                                    {product.product_description}
                                </p>
                            </div>
                            <div className="product-selector d-flex justify-content-center align-items-center">
                                <div>Size</div>
                                <div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Choose an option</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product-selector d-flex justify-content-center align-items-center">
                                <div>Color</div>
                                <div>
                                    <select className="form-select" aria-label="Default select example">
                                        <option defaultValue>Choose an option</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                            </div>
                            <div className="product-add-rmv-btn d-flex justify-content-center">

                                {/* <div className="btn-group" role="group" aria-label="Basic example">
                                        <button onClick={remove} type="button" className="btn btn-secondary btn-lg">-</button>
                                        <button type="button" className="btn btn-secondary btn-lg" >{quantity}</button>
                                        <button onClick={add} type="button" className="btn btn-secondary btn-lg">+</button>
                                    </div> */}
                                {/* <button onClick={(e) => {cartItemArray.push(product); saveCartItem(cartItemArray); }} type="button" className="btn btn-secondary btn-lg cartBtn">ADD TO CART</button> */}
                                <button onClick={() => {dispatch({type:'add_to_cart',payload:product})}} type="button" className="btn btn-secondary btn-lg cartBtn">ADD TO CART</button>

                            </div>

                            <div className="socal-media"></div>

                        </div>

                    </div>
                </div>
            </div>

        </section>

    )
}