import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, ListGroupItem } from 'reactstrap';

class SearchResult extends Component {
	
	// This will render types or violations based on the compontent type prop passed
	renderDetailSubBox = (result) => {
		if(this.props.type==='naughtyList'){
			return this.renderViolations(result.violations);
		}else{ // The OG default search result
			return this.renderTypes(result.license_number,result.types);
		}
	} 

	// This is for the orginization types, there are several options and they use the SVG spritesheet included in App.js
	renderTypes(lic,types){
		let results = [];
		types.forEach((type)=>{
			
			// Prepare
			let typePretty = type.replace(/-/g,' ');
			let typeKey = 'lic-'+lic+'-type-'+type;
			let typeIcon = type.split('-')[0];

			// This is the base icon
			let icon = [<use key={typeKey+'-icon'} className={'type-icon type-'+type} title={typePretty} href={'#'+typeIcon}></use>]

			// If the type is producer we need to also use the number
			if(typeIcon === 'producer'){
				let producerTier = type.split('-')[2]
				icon.push(<use key={typeKey+'-tier-number'} className={'tier-number'} title={'Tier '+producerTier} href={'#tier-'+producerTier}></use>)
			}

			// The main icon and the push
			results.push(<svg key={typeKey}>{icon}</svg>)
		})
		return results
	}

	// This is for the violation count. Make it look nice.
	renderViolations(violations){
		return (<h3 className={'violations'}>{violations}<i>Violations</i></h3>);
	}
	
	// You know what this does.
	render(){ 
		const result = this.props.data;
		if(result===undefined || result.license===undefined || result.organization===undefined){
			return null
		}else{
			// Lets look at the results and add some classes in
			let classes = ['search-result']
			let licStatus = '';
			
			// Process the license status for display
			if(result.active.substr(0,6)==='ACTIVE'){
				licStatus = ''; // No need to say active 911 times on the page
				classes.push('lic-active')

			}else if(result.active.substr(0,7)==='PENDING'){
				licStatus = '(Pending)';
				classes.push('lic-pending')

			}else{
				licStatus = result.active;
				classes.push('lic-unknown')
			}
			
			// Get the types and add them as classes
			result.types = result.type.replace(/MARIJUANA /g,'').toLowerCase().replace(/ /g,'-').split('/');
			classes.push(...result.types);

			// Prepare a pretty looking URL
			let urlPrettyOrg = result.organization.toLowerCase().replace(/[^a-z0-9]+/g,'-');

			// And finally the return
			return (
				<ListGroupItem key={'licnumkey'+result.license} className={classes.join(' ')}>
					<Link to={'/details/'+result.license+'/'+urlPrettyOrg}>
						<Row className={'d-flex'}>
							<Col xs="auto" className={'mr-auto'}>
								<h4>{result.organization}</h4> <h5>{licStatus} License# {result.license}</h5><br/>
								<address>{result.address+' '+(result.address_line_2!==undefined?result.address_line_2:'')+' '+result.city+', '+result.county+' county '+result.state}</address>
							</Col>
							<Col xs="auto" className={'extra'}>
								{this.renderDetailSubBox(result)}
							</Col>
						</Row>
					</Link>
				</ListGroupItem>
			)			
		}
	}
}

export default SearchResult;

// Paste this into the return to see everything
// <pre>{JSON.stringify(result,null,2)}</pre>