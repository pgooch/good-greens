import React, { Component } from 'react'
import { ListGroup, Container } from 'reactstrap';
import ReactPaginate from 'react-paginate';
import SearchResult from '../search-result'
import { Link } from 'react-router-dom';
// import { push } from 'connected-react-router'
// import { bindActionCreators } from 'redux'
// import { connect } from 'react-redux'
// import ReactTable from "react-table";

// Components

class NaughtyList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			violatorsData: {},
			violatorsOrdered: [],
			pageSize: 50,
		};
		// Loop through all the licenses and grab the details we need
		this.getNaughty();
	}

	// This function will save the data and keep on truckin
	saveData = (data,saveType) => {
		return new Promise((resolve,reject)=>{
			let tempState = this.state;
			switch(saveType){
				case 'violatorsOrdered':
					tempState.violatorsOrdered = data;
				break;
				case 'violatorsData':
					data.forEach((license)=>{
						tempState.violatorsData[license.license] = license
					})
				break;
				default:
					reject(new Error('saveData does not know what to do with "'+saveType+'" type data.'));
				break;
			}
			this.setState(tempState);
			resolve(data)
		});
	}

	// This will make the API call to get all violators grouped by violation count
	getNaughty = () => {
		let naughtyCall = ['https://data.lcb.wa.gov/resource/dgm4-3cm6.json?'];
		naughtyCall.push('$select=license_number,count(penalty_type)');
		naughtyCall.push('&$group=(license_number)&$order=count(penalty_type)desc');
		fetch(naughtyCall.join('')).then(response => response.json()).then((data)=>{return this.saveData(data,'violatorsOrdered')}).then(this.getLicenseData)
	}

	// This will take the Naughty data from the getNaughty function and add either add the appropriate license 
	// data or delete the entry if no license data can be found (why that happens, IDK)
	getLicenseData = (data) => {
		let justLics = data.map((violator)=>{return violator.license_number});
		// //This call uses the justLics array to get all of them at ones (or try)
		let licDetailsCall = ['https://data.lcb.wa.gov/resource/bhbp-x4eb.json?'];
		licDetailsCall.push('$where=license in ("'+justLics.join('","')+'") ')
		fetch(licDetailsCall.join('')).then(response => response.json()).then((data)=>{return this.saveData(data,'violatorsData')}).then(this.cleanNaughtyList)
	}

	// This function will remove the entries from state.violatorsOrdered that we could not find licenses for (no idea why)
	// This is done for simple and clean pagination
	cleanNaughtyList = () => {
		let justLics = this.state.violatorsOrdered.map((violator)=>{return violator.license_number});
		let tempState = this.state;
		// Loop through all the lics, checking to see if they are there, splice them out of the violatorsOrdered if there not
		justLics.forEach((lic,index)=>{
			if(this.state.violatorsData[lic]===undefined){
				tempState.violatorsOrdered.splice(index,1)
			}
		});
		// Update state so the display changes
		this.setState(tempState);
	}

	// Simply loops to call the list and renders it out, shared the SearchResults component.
	displayList = () => {
		let page = this.props.match.params.page;
		if(page===undefined){
			page = 1;
		}
		let results = [];
		for(let i = (page-1)*this.state.pageSize ; i<(page*this.state.pageSize) ; i++ ){
			if(this.state.violatorsOrdered[i]!==undefined){
				let lic = this.state.violatorsOrdered[i].license_number;
				let data = {'violations':this.state.violatorsOrdered[i].count_penalty_type,...this.state.violatorsData[lic]}
				results.push(<SearchResult data={data} type="naughtyList" key={'naughtyList'+lic}/>);
			}
		}
		return results;
	}

	// Simply updates the page number in the state, all the display logic is in the module or in displayList
	handlePageChange = (goToNum) => {
		this.props.history.push('/naughty/'+(goToNum.selected+1));
	}

	render = () => { 
		return (
			<Container>
				<p className={'naughty-note'}>This page lists all licenses by number of violations; records do not combine similar licenses, see <Link to={'/about/'}>About</Link> for more details. </p>
				<ListGroup className={'row'} flush>
					{this.displayList()}
				</ListGroup>
				<ReactPaginate 
					pageCount={Math.ceil(this.state.violatorsOrdered.length/this.state.pageSize)} 
					pageRangeDisplayed={5} 
					marginPagesDisplayed={3} 
					onPageChange={this.handlePageChange}
					containerClassName={(this.state.violatorsOrdered.length<=this.state.pageSize?'pagination hidden':'pagination justify-content-center')}
					pageClassName={'page-item'}
					pageLinkClassName={'page-link'}
					activeClassName={'active'}
					breakClassName={'page-link page-item disabled'}
					previousClassName={'page-item'}
					nextClassName={'page-item'}
					previousLinkClassName={'page-link'}
					nextLinkClassName={'page-link'}
					disabledClassName={'disabled'}
				/>
			</Container>
		)
	}
}
				// <pre>{JSON.stringify(this.state,null,2)}</pre>

export default NaughtyList;