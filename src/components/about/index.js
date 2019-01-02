import React, { Component } from 'react'
import { Container } from 'reactstrap';
import ReactMarkdown from 'react-markdown'
import ReadMe from '../../linked-readme.txt'

class About extends Component {
	constructor(){
		super()
		this.state = {readme:''};
	}
	componentWillMount(){
		fetch(ReadMe).then(r=>r.text()).then(t=>this.setState({readme:t}));
	}
	// Simple output, not really looking for a bnuch of hubub
	render(){ 
		return (
			<Container>
				<ReactMarkdown className={'readme-markdown'} source={this.state.readme} />
			</Container>
		)
	}
}

export default About