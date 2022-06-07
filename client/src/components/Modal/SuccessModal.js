import React from "react";
import './SuccessModal.css'
import { Button, Modal } from 'react-bootstrap'





export const SuccessModal = (props) => {
    return (
        <Modal
        className="modal-confirm"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <div className="icon-box">
					<i className="material-icons">&#xE876;</i>
				</div>				
				<h4 className="modal-title">Awesome!</h4>
            </Modal.Header>
            <Modal.Body>
                {/* <h4>SHOPPER</h4> */}
                <p>
                    {props.modalmessage}
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}