import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import ReactTable from "react-table";

// Components
import SimilarLicenses from '../details-similarbox'
import LicenseBox from '../license-box'
import Visit from '../details-visit'

class Detail extends Component {
	constructor(props) {
		super(props);
		let lics = props.match.params.license.split(',');
		this.state = {
			'name': '',
			'license': lics,
			'licenseDetails': [{organization:''}],
			'similarLicenses': null,
			'displayedLicense': 0,
			'visits': null,
			'violations': null,
			'vvOrdered': null,
		}
		// Loop through all the licenses and grab the details we need
		this.getLicenseDetails();
		this.getVisits();
		this.getViolations();
	}

	// This will grab the basic license information for the procided license number
	getLicenseDetails = (licNum) => {
		let licDetailsCall = ['https://data.lcb.wa.gov/resource/bhbp-x4eb.json?'];
		licDetailsCall.push('$where=license in ("'+this.state.license.join('","')+'") ')
		fetch(licDetailsCall.join('')).then(response => response.json()).then(this.storeAPIResults.bind(null,'licDetails'))
	}

	// This will look for other licenses that may have the same organization name, so we can give the option to combine.
	getSimilarLicenses = (licNum) => {
		if(this.state.similarLicenses===null){
			// QUick little update to turn the similarLicenses into an array
			let tempState = this.state;
			tempState.similarLicenses = [];
			this.setState(tempState);
			// Now we can make the call knowing it won't happen more than once
			let licDetailsCall = ['https://data.lcb.wa.gov/resource/bhbp-x4eb.json?'];
			licDetailsCall.push('$where=organization like "'+this.state.name+'" ')
			licDetailsCall.push('or ubi%20like%20%27'+this.state.ubi+'%25%27')
			fetch(licDetailsCall.join('')).then(response => response.json()).then(this.storeAPIResults.bind(null,'similarLicenses'))
		}
	}

	// This will query the API and get a list of vists, this data is pretty slim but it'll be good to have a idea of how often v how many violations
	getVisits = (licNum) => {
		let visitsCall = ['https://data.lcb.wa.gov/resource/w7wg-8m52.json?'];
		visitsCall.push('$where=license_number in ("'+this.state.license.join('","')+'") ')
		visitsCall.push('&$order=date desc')
		fetch(visitsCall.join('')).then(response => response.json()).then(this.storeAPIResults.bind(null,'visits'))
	}

	// This will query the API and get a list of violations, then call the store function to store it appropriatly
	getViolations = (licNum) => {
		let violationsCall = ['https://data.lcb.wa.gov/resource/dgm4-3cm6.json?'];
		violationsCall.push('$where=license_number in ("'+this.state.license.join('","')+'") ')
		violationsCall.push('&$order=visit_date desc')
		fetch(violationsCall.join('')).then(response => response.json()).then(this.storeAPIResults.bind(null,'violations'))
	}

	// This will store the API results depending on the call
	storeAPIResults = (source,records) => {
		let tempState = this.state;
		switch(source){
			case 'violations':
			case 'visits':
				if(tempState[source]===null){
					tempState[source] = []
				}
				tempState[source] = tempState[source].concat(records)
			break;
			case 'licDetails':
				tempState['licenseDetails'] = records;
				tempState['name'] = records[0].organization
				// Once we have the name we can check and see if others share that name.
				this.getSimilarLicenses();
			break;
			case 'similarLicenses':
				records.forEach((record) => {
					if(this.state.license.indexOf(record.license)<0){
						tempState.similarLicenses.push(record)
					}
				})
			break;
			default:
				throw new Error('Unable to store the "'+source+'" type API results.');
		}
		this.setState(tempState);
		// Check, if we have both the violations and the vists lets combine them into a date ordered list for a nice table or something
		if(tempState.visits!==null && tempState.violations!==null){
			this.combineVisitsViolations()
		}
	}

	// This will look through the visits and violcations and create a array of references to them thats ordered by date for display
	combineVisitsViolations = () => {

		// All this function does is return the object with the date pre-positioned, makes the code below cleaner
		let visitRecord = (date='') => {
			return {
				date: date,
				hasViolation: false,
				records: [],
			}
		}
		let combinedTemp = {}

		// First, lets loop through the visits
		this.state.visits.forEach((visit,index) => {
			let d = visit.date.substr(0,10);
			if(combinedTemp[d] === undefined){
				combinedTemp[d] = visitRecord(d)
			}
			combinedTemp[d].records.push({'type':'visit',...visit});
		})
		// Same thing but with the violations
		this.state.violations.forEach((violation,index) => {
			let d = violation.visit_date.substr(0,10); // not date like the other...
			if(combinedTemp[d] === undefined){
				combinedTemp[d] = visitRecord(d)
			}
			combinedTemp[d].hasViolation = true;
			combinedTemp[d].records.push({'type':'violation',...violation});
		})

		// We only need the values in this case, the keys were just to order and combine visits and violations
		combinedTemp = Object.keys(combinedTemp).map(function(k){return combinedTemp[k]});
		// And gotta flip it because the order is backwards, or not, really depends
		// combinedTemp = combinedTemp.reverse()
		// Now we are just going to store it in the state, thats right, there is no need to sort because the calls do that
		let tempState = this.state;
		tempState.vvOrdered = combinedTemp
		this.setState(tempState);
	}

	// This will get all the Visit components
	displayVisits = () => {
		// If we have liternally nothing then display nothing (it's got to get the first call, could put a loading message)
		if(this.state.vvOrdered === null){
			return null
		}else{
			// Post a message if there is no visits or violations
			if(this.state.vvOrdered.length===0){
				return (<div>
					<h3 className={'fancy'}>Visits & Violations</h3>
					<Row className={'no-visit-message'}>
						<Col>There or no visits or violations associated with this license.</Col>
					</Row>
				</div>)
			}

			// Ok, now that we know there are some, lets figure out how to render them
			let showLic = this.state.license.length>1 ? true : false
			let visits = [];
			this.state.vvOrdered.forEach((visit,index)=>{
				visit.index = index;
				visits.push(<Visit key={visit.date} showLic={showLic} visitRecord={visit} visits={this.state.visits} violations={this.state.violations} />)
			})

			// Prepare a string for the visits/violations summary before the table
			let summary = this.state.visits.length+' visits and ';
			if(this.state.violations.length>0){
				summary += this.state.violations.length+' violations.';
			}else{
				summary += 'no violations.'
			}

			// And a return of the Visits and Violations with the records
			return (<div>
				<h3 className={'fancy'}>Visits & Violations</h3>
				<div className="visit-violation-summary">{summary}</div>
				<table className={'table'}>
					<thead>
						<tr>
							<th>Date</th>
							{showLic?<th>License</th>:null}
							<th>Details</th>
						</tr>
					</thead>
					<tbody>
						{visits}
					</tbody>
				</table>
			</div>)
		}
	}

	render(){ 
		return (
			<Container location={this.props.location.pathname}>
				<LicenseBox licenses={this.state.licenseDetails}/>
				<SimilarLicenses current={this.state.licenseDetails[this.state.displayedLicense]} similars={this.state.similarLicenses} />
				{this.displayVisits()}
			</Container>
		)
	}
}

export default Detail;

// This is usefull for debugging and just seeing whats going on
// <pre>{JSON.stringify(this.state,null,2)}</pre>