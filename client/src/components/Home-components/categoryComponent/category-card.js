import React from "react";
import './category-card.css';

export const CategoryCard = ({object}) => {
    return (
        <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="content"> 
            {/* <a href={object.link}> */}
                <div className="content-overlay"></div>
                <img className="content-image" src={object.imgPath} alt="..." />
                <div className="content-details fadeIn-bottom">
                    <h3 className="content-title">{object.title}</h3>
                    <p className="content-text"> <a href="/shop" className="button">Shop Now</a></p>
                </div>
            {/* </a> */}
            </div>
        </div>
    )
}