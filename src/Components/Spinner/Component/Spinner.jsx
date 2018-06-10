import React, { Component } from "react";
import { Col, Modal, Row } from "react-bootstrap";

class Spinner extends Component {

	/**
	 * @description Returns Popup Modal Loading gif  
	 * 
	 * @author Suhas R More
	 * @returns 
	 * @memberof Spinner
	 * 
	 */
	render() {

		return (
			<Modal show={true}>
				<Modal.Body>
					<Row>
						<Col sm={5}>
						</Col>
						<Col sm={3}>
							<div>
								<img src="loading.gif" height="100px;" width="139px" alt="Loading " />
								<br />
								Loading...
						</div>
						</Col>

					</Row>
				</Modal.Body>

			</Modal>
		);
	}
}

export default Spinner;

