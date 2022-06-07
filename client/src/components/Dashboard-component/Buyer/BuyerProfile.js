import React from "react";
import './InfoTab.css'


export const BuyerProfile = ({
    oldPassword, oldPasswordHandler, newPassword, newPasswordHandler, updatePasswordHandler,
    firstName, fnameHandler, lastName, lnameHandler, houseNo, hnoHandler, street, streetHandler,
    pin, pinHandler, stateHandler, telephone, telephoneHandler, addressHandler }) => {







    return (
        <div className="tab-pane fade" id="Profile">
            <div className="profile">
                <div className="heading">
                    <h1>Your Profile</h1>
                </div>

                <div className="content">
                    <form onSubmit={updatePasswordHandler}>
                        <div className="row">
                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="password_old">Old password</label>
                                    <input onChange={oldPasswordHandler} value={oldPassword} className="form-control" id="password_old" type="password" required />
                                </div>
                            </div>

                            <div className="col-sm-6">
                                <div className="mb-4">
                                    <label className="form-label" htmlFor="password_new">New password</label>
                                    <input onChange={newPasswordHandler} value={newPassword} className="form-control" id="password_new" type="password" required />
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-4">
                            <button className="btn btn-outline-dark" type="submit" ><i
                                className="far fa-save me-2"></i>Update password</button>
                        </div>
                    </form>

                    <div className="block mb-5">
                        <div className="block-header"><strong className="text-uppercase">Personal
                            details</strong></div>
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

                                <div className="text-center mt-4">
                                    <button className="btn btn-outline-dark" type="submit"><i
                                        className="far fa-save me-2"></i>Save changes</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}