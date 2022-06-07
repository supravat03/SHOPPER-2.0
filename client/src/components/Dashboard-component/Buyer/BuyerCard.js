
import React from "react";
import './BuyerCard.css';


export const BuyerCard = (props) => {
    return (
        <div className="col-lg-3 col-md-3 col-sm-12 user-card">
            <div className="card">
                <img src={props.img_src}
                    className="card-img-top img-fluid rounded-circle customer-image shadow" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Customer Name</h5>
                </div>


                <ul className="nav nav-tabs list-group list-group-flush d-flex flex-column align-items-center"
                    id="myTab" role="tablist">
                    <li className="list-group-item">
                        <div className="active" data-bs-toggle="tab" data-bs-target="#Orders">Orders</div>
                    </li>
                    <li className="list-group-item ">
                        <div data-bs-toggle="tab" data-bs-target="#Profile">Profile</div>
                    </li>
                    <li className="list-group-item ">
                        <div data-bs-toggle="tab" data-bs-target="#Addresses">Addresses</div>
                    </li>
                </ul>

            </div>
        </div>
    )
}