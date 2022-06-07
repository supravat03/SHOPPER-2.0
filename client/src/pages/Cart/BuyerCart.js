import React, { useEffect, useState } from "react";
import './BuyerCart.css'

import { BuyerCartAddress } from "../../components/Cart/Buyer/BuyerCartAddress";
import { BuyerPaymenet } from "../../components/Cart/Buyer/BuyerPayment";
import { BuyerCartOrder } from "../../components/Cart/Buyer/BuyerCartOrder";


import { saveAddress, getAllAddress } from "../../core/services/api/user";
import { Loader } from "../../components/Loader/Loader";


import { SuccessModal } from "../../components/Modal/SuccessModal";
import { ErrorModal } from "../../components/Modal/ErrorModal";


import { CartContext } from "../../providers/Context";





export const BuyerCart = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [pin, setPin] = useState('');
    const [state, setState] = useState('');
    const [telephone, setTelephone] = useState('');


    const [address, setAddress] = useState([]);

    const [successModalShow, setSuccessModalShow] = React.useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');
    const [errorModalShow, setErrorModalShow] = React.useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');

    const [loading, setLoading] = useState(true);

    const {cartState} = CartContext();





    useEffect(() => {
        const getUserAddress = async () => {
            try {
                //get all addresses of a buyer
                const data = await getAllAddress();
                setAddress(data.address);
                setLoading(false);
            } catch (error) {
                setLoading(false);
                console.log(error);
            }
        }
        getUserAddress();
    }, [])


    const fnameHandler = (e) => {
        const { value } = e.target;
        setFirstName(value);
    }
    const lnameHandler = (e) => {
        const { value } = e.target;
        setLastName(value);
    }
    const hnoHandler = (e) => {
        const { value } = e.target;
        setHouseNo(value);
    }
    const streetHandler = (e) => {
        const { value } = e.target;
        setStreet(value);
    }
    const pinHandler = (e) => {
        const { value } = e.target;
        setPin(value);
    }
    const stateHandler = (e) => {
        const { value } = e.target;
        setState(value);
    }
    const telephoneHandler = (e) => {
        const { value } = e.target;
        setTelephone(value);
    }




    const addressHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await saveAddress(firstName, lastName, houseNo, street, pin, state, telephone);
            setErrorModalShow(false);
            setSuccessModalMessage(data.message);
            setSuccessModalShow(true);

        } catch (error) {
            console.log('address handler error', error);
            setSuccessModalShow(false);
            setErrorModalMessage('Something went wrong !!')
            setErrorModalShow(true);
        }
    }








    if (loading) {
        return <Loader />
    }


    return (
        <section className="container checkout">
            <div className="row">
                <div className="col-lg-8 col-md-8 col-sm-12">
                    <div className="checkout-option">
                        <ul className="nav nav-pills nav-fill ">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="..." data-bs-toggle="tab"
                                    data-bs-target="#address">Address</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="..." data-bs-toggle="tab" data-bs-target="#order-review">Order
                                    Review</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="..." data-bs-toggle="tab" data-bs-target="#payment-method">Payment
                                    Method</a>
                            </li>

                        </ul>
                    </div>


                    <div className="tab-content ">

                        <BuyerCartAddress address={address}
                            firstName={firstName}
                            fnameHandler={fnameHandler}
                            lastName={lastName}
                            lnameHandler={lnameHandler}
                            houseNo={houseNo}
                            hnoHandler={hnoHandler}
                            street={street}
                            streetHandler={streetHandler}
                            pin={pin}
                            pinHandler={pinHandler}
                            stateHandler={stateHandler}
                            telephone={telephone}
                            telephoneHandler={telephoneHandler}
                            addressHandler={addressHandler}
                        />
                        <BuyerCartOrder />
                        <BuyerPaymenet />

                    </div>

                </div>
                <div className="col-lg-4 col-md-4 col-sm-12" style={{ textAlign: 'initial', marginTop: '30px' }}>
                    <div className="order-summary">
                        <div className="block mb-5">
                            <div className="block-header">
                                <h6 className="text-uppercase mb-0">Order Summary</h6>
                            </div>
                            <div className="block-body bg-light pt-1">
                                <p className="text-sm">Shipping and additional costs are calculated based on values you have
                                    entered.</p>
                                <ul className="order-summary mb-0 list-unstyled">
                                    <li className="order-summary-item"><span>Order Subtotal </span><span>
                                        ₹ {cartState.reduce((a, b) => a + (b.qty * b.product_price), 0)}
                                    </span></li>
                                    <li className="order-summary-item"><span>Shipping and handling</span><span>₹ 10.00</span>
                                    </li>
                                    <li className="order-summary-item"><span>Tax</span><span>₹ 10.00</span></li>
                                    <li className="order-summary-item border-0"><span>Total</span><strong
                                        className="order-summary-total">
                                        ₹ {20 + cartState.reduce((a, b) => a + (b.qty * b.product_price), 0)}
                                    </strong></li>
                                </ul>
                            </div>
                            <div className="block-header" type="button" style={{ textAlign: 'center' }}>
                                <h6 className="text-uppercase mb-0">CHECKOUT</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <SuccessModal show={successModalShow} onHide={() => { setSuccessModalShow(false); window.location.reload(); }}
                modalmessage={successModalMessage} />
            <ErrorModal show={errorModalShow} onHide={() => setErrorModalShow(false)}
                modalmessage={errorModalMessage} />
        </section>
    )
}