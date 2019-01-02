import React, { Component } from 'react'
import { Row, Col } from 'reactstrap';

class SearchResultsMessage extends Component {
	render(){ 
		let page = this.props.pageNumber === undefined ? 1 : this.props.pageNumber;

		if(this.props.searchStatus === 'waiting'){
			let message = ''
			let addedClass = 'waiting';
			return (<Row className={'search-message'}><Col className={addedClass}>{message}</Col></Row>)
		}else{
			let message = 'Searching the Washington State Liquor and Cannabis Control Board API...'
			let addedClass = 'searching';
			if(this.props.searchStatus==='completed'){
				addedClass = 'searched';
				let showingSubString = '';
				if(this.props.resultCount > this.props.resultsPerPage){
					showingSubString = ', showing results '+(((page-1)*this.props.resultsPerPage)+1)+' to '+(page*this.props.resultsPerPage);
				}
				if(this.props.resultCount === 0){
					addedClass += ' none-found';
					message = 'Unable to find any orginizations that match your search.'
				}else if(this.props.resultCount < 1000){
					message = 'Found '+this.props.resultCount+' licenses matching your search'+showingSubString+'.'
				}else{// at 1000 resutls we are gonna guess there might be more
					message = 'Found at least 1,000 licenses matching your search'+showingSubString+'.';
				}
			}
			return (<Row className={'search-message'}><Col className={addedClass}>{message}</Col></Row>)
		}
	}
}

export default SearchResultsMessage;

// Paste this into the return to see everything
// <pre>{JSON.stringify(this.props,null,2)}</pre>


