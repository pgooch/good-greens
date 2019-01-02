import React, { Component } from 'react'

import { Container, Row, Col } from 'reactstrap';

class Footer extends Component {
	render(){ 
		return (<Container id="footer">
			<Row>
				<Col xs="12">This site is in no way affiliated with any of the companies or brands listed.</Col>
				<Col xs="12">Information provided by the <a href="https://data.lcb.wa.gov/" target="_blank" rel="noopener noreferrer">Washington State Liquor and Cannabis Control Board</a> API and may not be completly up-to-date.</Col>
				<Col xs="12">Made with; <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">React</a>, <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">Redux</a>, <a href="https://reacttraining.com/react-router/" target="_blank" rel="noopener noreferrer">React Router</a>, <a href="https://reactstrap.github.io/" target="_blank" rel="noopener noreferrer">reactstrap</a>, <a href="https://github.com/AdeleD/react-paginate" target="_blank" rel="noopener noreferrer">React Paginate</a>, <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">SASS</a>, and hosted on <a href="# put repo link here" rel="noopener noreferrer">GitHub</a></Col>
			</Row>
		</Container>)
	}
}

export default Footer;