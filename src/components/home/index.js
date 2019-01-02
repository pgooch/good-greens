import React, { Component } from 'react'
import ReactPaginate from 'react-paginate';
import { connect } from "react-redux";
import { saveSearchTerm, saveSearchResults } from '../../actions.js';

// Components
import { Container, Row, Col, ListGroup } from 'reactstrap';
import SearchResult from '../search-result'
import SearchResultsMessage from '../search-results-message'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: this.props.searchInput,
			results: this.props.searchResults,
			searchStatus: 'waiting',
			pageCount: 50,
		}
		if(this.state.results.length>0){
			this.state.searchStatus = 'completed'
		}
	}

	// Simply updates the state and then starts the call against the API
	updateSearch = (e) => {
		e.preventDefault()
		let term = e.target.querySelector('#search-term').value
		
		// Get a temp state then update
		let tempState = this.state
		tempState.input = term
		tempState.searchStatus = 'searching'
		this.setState(tempState)

		// Save it into the redux store
		this.props.saveSearchTerm(term); 

		// Get the search results (via the API)
		this.getSearchResults();
	}

	// This will make a call against the licenses enpoint with the search term. It's kinda messy but it searches against name, ubi, 
	// and lic# since you can easily find one of those things on the packaging (or so I've been told).
	getSearchResults = () => {
		// Clean up the term
		let pTerm = this.state.input.toUpperCase();

		// This will create a nice long query
		let searchCall = ['https://data.lcb.wa.gov/resource/bhbp-x4eb.json?'];
		searchCall.push('$where=organization%20like%20%27%25'+pTerm+'%25%27');
		searchCall.push('or license%20like%20%27'+pTerm+'%25%27');
		searchCall.push('or ubi%20like%20%27'+pTerm+'%25%27');
		searchCall.push('&$order=%20organization');

		// Fetch the data
		fetch(searchCall.join('')).then(response => response.json()).then(this.storeSearchResults)
	}
	// This stores the latest search results in the state for display later
	storeSearchResults = (resultArray) => {
		// Get a temp state, update it, then setState
		let tempState = this.state
		tempState.results = resultArray
		tempState.searchStatus = 'completed';
		this.setState(tempState)

		// Save the search results to the react store
		this.props.saveSearchResults(resultArray); 
	}

	// Simply loops to call the SearchResult component
	displaySearchResults = () => {
		let page = this.props.match.params.page;
		page = page === undefined ? 1 : page;
		let results = [];

		if(this.state.results.length>0){
			for(let i = (page-1)*this.state.pageCount ; i < (page*this.state.pageCount) ; i++){
				if(this.state.results[i] !== undefined){
					results.push(<SearchResult data={this.state.results[i]} key={'searchResultsLic'+this.state.results[i].license}/>)
				}
			}
		}
		return results;
	}

	// Simply updates the page number in the state, all the display logic is in the module or in displayList
	handlePageChange = (goToNum) => {
		this.props.history.push('/search/'+(goToNum.selected+1));
	}

	// Simple output, not really looking for a bnuch of hubub
	render(){ 
		return (
			<Container>
				<Row><Col><p>{/* At some point I should put some copy text here. */}</p></Col></Row>
				<form onSubmit={this.updateSearch} id={'main-search-form'} className={'row'}>
				  	<input placeholder={'Enter a orginization name, license number, or UBI number.'} id={'search-term'} name={'search-term'} type="search" defaultValue={this.state.input} className={'col'} />
				  	<button className={'col-sm-2'}>Search</button>
				</form>
				<SearchResultsMessage searchStatus={this.state.searchStatus} resultCount={this.state.results.length} resultsPerPage={this.state.pageCount} pageNumber={this.props.match.params.page}/>
				<ListGroup className={'row'} flush>
					{this.displaySearchResults()}
				</ListGroup>
				<ReactPaginate 
					containerClassName={(this.state.results.length<=this.state.pageCount?'pagination hidden':'pagination justify-content-center')}
					pageCount={Math.ceil(this.state.results.length/this.state.pageCount)} 
					pageRangeDisplayed={5} 
					marginPagesDisplayed={3} 
					onPageChange={this.handlePageChange}
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


const mapStateToProps = (state) => {
	return state;
};
const mapDispatchToProps = (dispatch) => {
	return {
		saveSearchTerm: (term) => { dispatch(saveSearchTerm(term)) },
		saveSearchResults: (results) => { dispatch(saveSearchResults(results)) 	}
	}
}
export default connect(mapStateToProps,mapDispatchToProps)(Home)

// export default Home;