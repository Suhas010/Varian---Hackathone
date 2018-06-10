import React, { Component } from "react";
import { Modal, Button } from "react-bootstrap";
import strings from '../Constants';
import './Popup.css';

/**
 * @description
 * 
 * @author Suhas R More
 * @class PopupMessage
 * @extends {Component}
     */
	
class PopupMessage extends Component {

	render() {
		return (
			<Modal
				className = "popupScreen"
				backdrop = { true } 
				show = { true }
				onHide = { this.props.onClick }>

				<Modal.Header
					className = "popupHeader" >
					<span
						className = "popupHeaderText">
						{ title }
					</span>
				</Modal.Header>
				
				<Modal.Body>
					{ message }
				</Modal.Body>

				<Modal.Footer>
					<Button
						className = "popupButton"
						onClick = { this.props.onClick }
					>
						{ buttonText }
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}
export default PopupMessage;
