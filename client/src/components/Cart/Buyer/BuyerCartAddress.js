import React from "react";

export const BuyerCartAddress = ({ address,
    firstName, fnameHandler, lastName, lnameHandler, houseNo, hnoHandler, street, streetHandler,
    pin, pinHandler, stateHandler, telephone, telephoneHandler, addressHandler }) => {


    return (
        <div className="tab-pane fade show active " id="address" role="tabpanel" aria-labelledby="nav-home-tab" style={{ textAlign: 'initial' }}>
            {/* <form action="#"> */}
                <div className="block">
                    <div className="block-header">
                        <h6 className="text-uppercase mb-0">Select an address </h6>
                    </div>
                    <div className="block-body">
                        <div className="row">
                            <div className="col-md-12 d-flex address-tab">
                                <div className="row">
                                    {
                                        address.map((address, index) => {
                                            return (
                                                <div className="form-check col-lg-6 col-md-6 col-sm-12 address-card-wrap" key={address.address_id}>
                                                    <div className="block-body d-flex align-items-center address-card"  >
                                                        <input onClick={e => console.log(e.target.value)} type="radio" name="shippping" id={"address_id_" + index} value={address.address_id} />
                                                        <label className="ms-3" htmlFor={"address_id_" + index} ><strong
                                                            className="d-block text-uppercase mb-2"> {address.first_name} {address.last_name}</strong>
                                                            <span className="text-muted text-sm">

                                                                {address.house_no}, {address.street} <br />
                                                                {address.pin},{address.state}<br />
                                                                {address.telephone}
                                                            </span>
                                                        </label>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>

                            <div className="mb-4 col-12 mt-3">
                                <div className="form-check">
                                    <input id="show-shipping-address" type="radio" name="shippping" />
                                    <label className="form-check-label align-middle" htmlFor="show-shipping-address"
                                        data-bs-toggle="collapse" data-bs-target="#shippingAddress">Use a
                                        different shipping address</label>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className="collapse" id="shippingAddress">
                        <div className="block">
                            <div className="block-header">
                                <h6 className="text-uppercase mb-0">Shipping address </h6>
                            </div>
                            <div className="block-body">
                                <form onSubmit={addressHandler}>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label className="form-label"
                                                    htmlFor="firstname">Firstname</label>
                                                <input onChange={fnameHandler} value={firstName} className="form-control" id="firstname" type="text" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label className="form-label"
                                                    htmlFor="lastname">Lastname</label>
                                                <input onChange={lnameHandler} value={lastName} className="form-control" id="lastname" type="text" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="house_no">House
                                                    No</label>
                                                <input onChange={hnoHandler} value={houseNo} className="form-control" id="house_no" type="text" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="street">Street</label>
                                                <input onChange={streetHandler} value={street} className="form-control" id="street" type="text" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-sm-6 col-md-3">
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="pin">PIN</label>
                                                <input onChange={pinHandler} value={pin} className="form-control" id="pin" type="number" required />
                                            </div>
                                        </div>
                                        <div className="col-sm-6 col-md-3">
                                            <div className="mb-4">
                                                <label className="form-label" htmlFor="state">State</label>
                                                <select onClick={stateHandler} id="state" className="form-select" aria-label="Default select example">
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
                                                <label className="form-label" htmlFor="phone">Telephone</label>
                                                <input onChange={telephoneHandler} value={telephone} className="form-control" id="phone" type="number" required />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group col-md-12">
                                        <div className="d-grid">
                                            <button  className="btn btn-primary" type="submit">Save</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            {/* </form> */}
        </div>
    )
}