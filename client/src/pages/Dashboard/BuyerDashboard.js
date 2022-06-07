import React, { useEffect, useState } from "react";
import './BuyerDashboard.css'
import { BuyerCard } from "../../components/Dashboard-component/Buyer/BuyerCard";
import { BuyerOrder } from "../../components/Dashboard-component/Buyer/BuyerOrder";
import { BuyerProfile } from "../../components/Dashboard-component/Buyer/BuyerProfile";
import { BuyerAddress } from "../../components/Dashboard-component/Buyer/BuyerAddress";
import { updatePassword, saveAddress, getAllAddress, deleteAddressById, updateAddressById } from "../../core/services/api/user";
import { SuccessModal } from "../../components/Modal/SuccessModal";
import { ErrorModal } from "../../components/Modal/ErrorModal";
import { Loader } from "../../components/Loader/Loader";

export const BuyerDashboard = (props) => {

    const img_src = "../pics/gallery-09.jpg";

    //pass this to BuyerOrder component
    const orderData = [
        { id: '1111', date: '08/10/2021', price: '1000.00', badge: 'info-light', status: 'Being prepared' },
        { id: '2222', date: '08/10/2021', price: '1000.00', badge: 'warning-light', status: 'Being prepared' },
        { id: '3333', date: '08/10/2021', price: '1000.00', badge: 'success-light', status: 'Being prepared' },
        { id: '4444', date: '08/10/2021', price: '1000.00', badge: 'danger-light', status: 'Being prepared' },

    ];



    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [houseNo, setHouseNo] = useState('');
    const [street, setStreet] = useState('');
    const [pin, setPin] = useState('');
    const [state, setState] = useState('');
    const [telephone, setTelephone] = useState('');

    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const [address, setAddress] = useState([]);

    const [successModalShow, setSuccessModalShow] = React.useState(false);
    const [successModalMessage, setSuccessModalMessage] = useState('');
    const [errorModalShow, setErrorModalShow] = React.useState(false);
    const [errorModalMessage, setErrorModalMessage] = useState('');

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getUserAddress = async () => {
            try {
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
    const oldPasswordHandler = (e) => {
        const { value } = e.target;
        setOldPassword(value);
    }
    const newPasswordHandler = (e) => {
        const { value } = e.target;
        setNewPassword(value);
    }

    const updatePasswordHandler = async (e) => {
        e.preventDefault();
        try {
            const data = await updatePassword(newPassword, oldPassword);
            console.log(data);
            setOldPassword('');
            setNewPassword('');
            setErrorModalShow(false);
            setSuccessModalMessage(data.message);
            setSuccessModalShow(true);

        } catch (error) {
            console.log('update password handler error', error);
            setOldPassword('');
            setNewPassword('');
            setSuccessModalShow(false);
            setErrorModalMessage('Something went wrong !!')
            setErrorModalShow(true);

        }

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

    const deleteAddress = async (e) => {
        try {
            const { id } = e.target;
            const data = await deleteAddressById(id);
            setErrorModalShow(false);
            setSuccessModalMessage(data.message);
            setSuccessModalShow(true);
        } catch (error) {
            console.log(error);
            setSuccessModalShow(false);
            setErrorModalMessage('Something went wrong !!')
            setErrorModalShow(true);
        }
    }

    const updateAddressHandler = async (e) => {
        e.preventDefault();
        try {
            const id = e.target.name;
            const data = await updateAddressById(id, firstName, lastName, houseNo, street, pin, state, telephone);
            setErrorModalShow(false);
            setSuccessModalMessage(data.message);
            setSuccessModalShow(true);

        } catch (error) {
            console.log(error);
            setSuccessModalShow(false);
            setErrorModalMessage('Something went wrong !!')
            setErrorModalShow(true);

        }
    }


    if (loading) {
        return <Loader />
    }

    return (

        <section className="dashboard-container container">
            <div className="container">
                <div className="row">
                    <BuyerCard img_src={img_src} />
                    <div className="col-lg-9 col-md-9 col-sm-12 ">
                        <div className="user-details container">
                            <div className="tab-content">

                                <BuyerOrder orderData={orderData} />

                                <BuyerProfile
                                    oldPassword={oldPassword}
                                    oldPasswordHandler={oldPasswordHandler}
                                    newPassword={newPassword}
                                    newPasswordHandler={newPasswordHandler}
                                    updatePasswordHandler={updatePasswordHandler}
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
                                <BuyerAddress
                                    address={address}
                                    deleteAddress={deleteAddress}
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
                                    updateAddressHandler={updateAddressHandler}
                                />

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