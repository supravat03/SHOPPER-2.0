import React from "react";
import './ErrorModal.css'
import { Button, Modal } from 'react-bootstrap'





export const ErrorModal = (props) => {
    return (
        <Modal
        className="modal-error"
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            <div className="icon-box">
					<i className="material-icons">&#xE645;</i>
				</div>				
				<h4 className="modal-title">Oops!</h4>
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