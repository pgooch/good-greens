import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

import SearchResult from '../search-result'

class SimilarLicenses extends Component {

	// Simply loops through the similar results and calls the search result component for them
	outputSimilarResults = () => {
		let similars = []
		this.props.similars.forEach((license)=>{
			similars.push(<SearchResult data={license} key={'searchResultsLic'+license.license}/>)
		})
		return similars
	}

	// This simple returns the link to everything combined
	combinedDetails = () => {
		let lics = [this.props.current.license]
		let name = '';
		this.props.similars.forEach((license)=>{
			lics.push(license.license);
			if(name===''){
				name = license.organization
			}
		})
		return '/details/'+lics.join(',')+'/'+name.toLowerCase().replace(/[^a-z0-9]/g,'-')
	}

	render(){
		// If there are no similars we can leave this blank. 
		if(this.props.similars === null || this.props.similars.length === 0){
			return null
		}else{
			return (<Container className={'similar-box'}>
				<Row>
					<h3 className={'fancy'}>Similar Licenses</h3>
				</Row>
				<Row>
					<Col>
						{this.outputSimilarResults()}
					</Col>
				</Row>
				<Row>
					<Col className={'combine-link justify-content-end'}><Link to={this.combinedDetails()} className={'btn  btn-outline-primary'}>Combine all above orginizations</Link></Col>
				</Row>
			</Container>)
		}
	}
}

export default SimilarLicenses;