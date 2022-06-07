import React from "react";


export const BuyerPaymenet = () => {
    return (
        <div className="tab-pane fade" id="payment-method" role="tabpanel" aria-labelledby="nav-contact-tab" style={{textAlign:'initial'}}>

            <div className="mb-5">
                <div id="accordion" role="tablist">
                    <div className="block mb-3">
                        <div className="block-header" id="headingOne" role="tab"><strong><a
                            className="accordion-link" data-bs-toggle="collapse" href="#collapseOne"
                            aria-expanded="true" aria-controls="collapseOne">Credit
                            Card</a></strong></div>
                        <div className="collapse show" id="collapseOne" role="tabpanel"
                            aria-labelledby="headingOne" data-parent="#accordion">
                            <div className="block-body">
                                <form action="#">
                                    <div className="row">
                                        <div className="mb-4 col-md-12">
                                            <label className="form-label" htmlFor="card-name">Name on Card</label>
                                            <input className="form-control" type="text" name="card-name"
                                                placeholder="Name on card" id="card-name" />
                                        </div>
                                        <div className="mb-4 col-md-12">
                                            <label className="form-label" htmlFor="card-number">Card Number</label>
                                            <input className="form-control" type="text" name="card-number"
                                                placeholder="Card number" id="card-number" />
                                        </div>
                                        <div className="mb-6 col-md-6">
                                            <label className="form-label" htmlFor="expiry-date">Expiry Date</label>
                                            <input className="form-control" type="text" name="expiry-date"
                                                placeholder="MM/YY" id="expiry-date" />
                                        </div>
                                        <div className="mb-6 col-md-6">
                                            <label className="form-label" htmlFor="cvv">CVV</label>
                                            <input className="form-control" type="text" name="cvv"
                                                placeholder="123" id="cvv" />
                                        </div>

                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="block mb-3">
                        <div className="block-header" id="headingTwo" role="tab"><strong><a
                            className="accordion-link collapsed" data-bs-toggle="collapse"
                            href="#collapseTwo" aria-expanded="false"
                            aria-controls="collapseTwo">Upi</a></strong></div>
                        <div className="collapse" id="collapseTwo" role="tabpanel" aria-labelledby="headingTwo"
                            data-parent="#accordion">
                            <div className="block-body py-5 d-flex align-items-center">
                                <input type="radio" name="shippping" id="payment-method-1" />
                                <label className="ms-3" htmlFor="payment-method-1"><strong
                                    className="d-block text-uppercase mb-2"> Pay with Bhim</strong><span
                                        className="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. </span></label>
                            </div>
                        </div>
                    </div>
                    <div className="block mb-3">
                        <div className="block-header" id="headingThree" role="tab"><strong><a
                            className="accordion-link collapsed" data-bs-toggle="collapse"
                            href="#collapseThree" aria-expanded="false"
                            aria-controls="collapseThree">Cash on delivery</a></strong>
                        </div>
                        <div className="collapse" id="collapseThree" role="tabpanel"
                            aria-labelledby="headingThree" data-parent="#accordion">
                            <div className="block-body py-5 d-flex align-items-center">
                                <input type="radio" name="shippping" id="payment-method-2" />
                                <label className="ms-3" htmlFor="payment-method-2"><strong
                                    className="d-block text-uppercase mb-2"> Cash on delivery</strong><span
                                        className="text-muted text-sm">Lorem ipsum dolor sit amet, consectetur
                                        adipisicing elit. </span></label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}