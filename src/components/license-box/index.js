import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import ReactTable from "react-table";

class LicenseBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayed: 0,
		}
	}

	// This will check the nuber of licenses and display those buttons accordingly
	licenseNavDisplay = () => {
		if(this.props.licenses.length>1){
			return (<span className="license-traversal-btn">
				<button onClick={this.updateDisplayedLicense} className={'btn btn-outline-primary'} disabled={this.licenseNavDisabled(-1)} data-adjustment={-1} id={'lic-back-b'}>Back</button>
				<span className={"btn not-a-btn"}>{this.state.displayed+1} of {this.props.licenses.length}</span>
				<button onClick={this.updateDisplayedLicense} className={'btn btn-outline-primary'} disabled={this.licenseNavDisabled( 1)} data-adjustment={1} id={'lic-forward-b'}>Forward</button>
			</span>)
		}else{
			return null
		}
	}

	// This will return true or fale to let the buttons know if they need to be disabled or not
	licenseNavDisabled = (direction) => {
		if(direction < 0){
			if(this.state.displayed+direction < 0){
				return true;
			}else{
				return false;
			}
		}else if(direction > 0){
			if(direction > 0 && this.state.displayed+direction >= this.props.licenses.length ){
				return true;
			}else{
				return false;
			}
		}else{
			// If all else fails give up and quit
			return false
		}
	}

	// This updated the displayedLicense value, and prevent it from going out-of-bounds.
	updateDisplayedLicense = (e) => {
		// Get the adjustment direction and the new Integer
		let adj = parseInt(e.target.dataset.adjustment);
		let newI = this.state.displayed+adj
		
		// Make sure the request is still within range, update the state via a tempState
		if(newI>=0 && newI<this.props.licenses.length){
			let tempState = this.state;
			tempState.displayed = newI
			this.setState(tempState);
		}
	}

	render(){ 
		// If there are no lices this box should not show, can happen for a moment before the API gets back to us.
		if(this.props.licenses[this.state.displayed].address===undefined){
			return null
		}else{
			let lic = this.props.licenses[this.state.displayed]; // easier to use lci than that whole thing
			return (<Container>
				<Row className={'lic-orgname'}><Col xs="auto" className="mr-auto" tag={'h1'}>{lic.organization}</Col><Col xs="auto">{this.licenseNavDisplay()}</Col></Row>
				<Row className={'lic-details'}>
					<Col xs="2">Address</Col>
					<Col xs="10">{lic.address+' '+(lic.address_line_2!==undefined?lic.address_line_2:'')+' '+lic.city+', '+lic.state+' '+lic.zip}</Col>
					<Col xs="2">County</Col>
					<Col xs="4">{lic.county}</Col>
					<Col xs="2">Phone Number</Col>
					<Col xs="4">{lic.dayphone}</Col>
					<Col xs="2">Type</Col>
					<Col xs="10">{lic.type}</Col>
					<Col xs="2">UBI</Col>
					<Col xs="4">{lic.ubi}</Col>
					<Col xs="2">License Number</Col>
					<Col xs="4">{lic.license}</Col>
					<Col xs="2">Creation Date</Col>
					<Col xs="4">{lic.createdate}</Col>
					<Col xs="2">Status</Col>
					<Col xs="4">{lic.active}</Col>
				</Row>
			</Container>)

		}
	}
}

export default LicenseBox;