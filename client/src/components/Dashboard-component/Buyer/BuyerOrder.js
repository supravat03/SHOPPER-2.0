import React from "react";
import './InfoTab.css'
export const BuyerOrder = ({ orderData }) => {
    return (
        <div className="tab-pane fade show active" id="Orders">
            <div className="orders">
                <div className="heading">
                    <h1>Your Orders</h1>
                </div>

                <div className="content">

                    <table className="table table-borderless table-hover table-responsive-md">
                        <thead className="bg-light">
                            <tr>
                                <th className="py-4 text-uppercase text-sm">Order #</th>
                                <th className="py-4 text-uppercase text-sm">Date</th>
                                <th className="py-4 text-uppercase text-sm">Total</th>
                                <th className="py-4 text-uppercase text-sm">Status</th>
                                <th className="py-4 text-uppercase text-sm">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orderData.map(data => {
                                    return (
                                        <tr key={data.id}>
                                            <th className="py-4 align-middle"># {data.id}</th>
                                            <td className="py-4 align-middle">{data.date}</td>
                                            <td className="py-4 align-middle">₹ {data.price}</td>
                                            <td className="py-4 align-middle"><span
                                                className={"badge p-2 text-uppercase badge-"+data.badge}>{data.status}
                                            </span></td>
                                            <td className="py-4 align-middle"><a className="btn btn-outline-dark btn-md"
                                                href="customer-order.html">View</a></td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}