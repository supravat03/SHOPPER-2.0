import React from "react";
import './product-card.css'
import { CartContext } from "../../providers/Context";


export const ProductCard = ({ object }) => {


  // console.log(Buffer.from(object.image_1).toString() );
 
  const {cartState, dispatch}= CartContext();

  
  return (
    <div className="col-lg-3 col-md-4 col-sm-6 mt-25">
      <div className="product-wrap mb-25 ">
        <div className="product-img">
          <a href={"shop/"+ object.product_id }>
            <img className="default-img" src={`data:image/png;base64,${object.image_1}`} alt="" />
            {/* <img className="default-img" src={`http://localhost:3001/uploads/${object.image_1}`} alt="" /> */}
            {/* <img className="default-img" src={object.image_1} alt="" /> */}
            {/* <img className="hover-img" src="/assets/img/product/fashion/29.jpg" alt="" />  */}
          </a>
          {/* <div className="product-img-badges"><span className="purple">New</span></div>  */}
          <div className="product-action d-flex flex-row justify-content-center align-items-center">
            <div className="pro-same-action pro-wishlist">
              <button className="" title="Add to wishlist"><i className="far fa-sm fa-heart"></i></button>
            </div>
            <div className="pro-same-action pro-cart"><a href={"/shop/"+ object.product_id}>VIEW</a></div>
            <div className="pro-same-action pro-quickview">
              <button onClick={()=> dispatch({type:'add_to_cart',payload:object})} title="Add To Cart">
              <i className="fas fa-sm fa-shopping-cart"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="product-content text-center">
          <h3><a href={"/shop/"+object.product_id}>{object.product_name}</a></h3>
          <div className="product-rating">
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
            <i className="fa fa-star-o yellow"></i>
          </div>
          <div className="product-price"><span>₹ {object.product_price} </span></div>
        </div>
      </div>
    </div>
  )
}