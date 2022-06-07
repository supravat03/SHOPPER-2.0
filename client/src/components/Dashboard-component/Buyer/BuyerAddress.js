import React from "react";
import './InfoTab.css'

export const BuyerAddress = ({ address, deleteAddress,
    firstName, fnameHandler, lastName, lnameHandler, houseNo, hnoHandler, street, streetHandler,
    pin, pinHandler, stateHandler, telephone, telephoneHandler, updateAddressHandler
}) => {



    return (
        <div className="tab-pane fade" id="Addresses">
            <div className="address">
                <div className="heading">
                    <h1>Your Addresses</h1>
                </div>

                <div className="content row justify-content-around">

                    {
                        address.map((address, index) => {
                            return ([
                                <div key={address.address_id} className="card text-white bg-secondary mb-3" style={{ maxWidth: '18rem' }}>
                                    <div className="card-header d-flex  justify-content-around ">
                                        <i onClick={deleteAddress} id={address.address_id} className="fas fa-trash"></i>
                                        Address {index + 1}
                                        <i id={address.address_id} data-bs-toggle="collapse" data-bs-target={"#collapseExample" + address.address_id} className="far fa-edit"></i>
                                    </div>
                                    <div className="card-body">
                                        <h5 className="card-title">{`${address.first_name} ${address.last_name}`}</h5>
                                        <p className="card-text">
                                            {`${address.house_no},${address.street},${address.pin},${address.state}`}
                                            <br />
                                            {`${address.telephone}`}
                                        </p>
                                    </div>
                                </div>,



                                <div key={index} className="collapse" id={"collapseExample" + address.address_id} style={{ margin: '10px auto 20px' }}>
                                    <div className="block-body">
                                        <form onSubmit={updateAddressHandler} name={address.address_id}>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-4">
                                                        <label className="form-label"
                                                           >Firstname</label>
                                                        <input onChange={fnameHandler} value={firstName} className="form-control"  type="text" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-4">
                                                        <label className="form-label"
                                                            >Lastname</label>
                                                        <input onChange={lnameHandler} value={lastName} className="form-control"  type="text" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="mb-4">
                                                        <label className="form-label" >House
                                                            No</label>
                                                        <input onChange={hnoHandler} value={houseNo} className="form-control" type="text" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-4">
                                                        <label className="form-label" >Street</label>
                                                        <input onChange={streetHandler} value={street} className="form-control"  type="text" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="row">
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="mb-4">
                                                        <label className="form-label" >PIN</label>
                                                        <input onChange={pinHandler} value={pin} className="form-control" type="number" required />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6 col-md-3">
                                                    <div className="mb-4">
                                                        <label className="form-label">State</label>
                                                        <select onClick={stateHandler} className="form-select" aria-label="Default select example">
                                                            <option defaultValue>Please Select</option>
                                                            <option value="0">West Bengal</option>
                                                            <option value="1">Delhi</option>
                                                            <option value="2">Mumbai</option>
                                                            <option value="3">Uttar Pradesh</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="mb-4">
                                                        <label className="form-label" >Telephone</label>
                                                        <input onChange={telephoneHandler} value={telephone} className="form-control"  type="number" required />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="text-center mt-4">
                                                <button className="btn btn-outline-dark" type="submit"><i
                                                    className="far fa-save me-2"></i>Update</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            ])
                        })
                    }

                </div>
            </div>
        </div>
    )
}