import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { withRouter } from "react-router";

class HeaderBar extends Component {
	constructor(props) {
		super(props);
		this.toggle = this.toggle.bind(this);
		this.state = {
	  		isOpen: false
		};
	}
	toggle() { // Simple menu toggel per reactstrap
		this.setState({
	  		isOpen: !this.state.isOpen
		});
	}
	render(){ 
		let currentPathname = this.props.location.pathname;
		return (
	        <Navbar dark expand="sm" className={'navbar'}>
	          <NavbarBrand tag={Link} to="/" >Good Greens</NavbarBrand>
	          <NavbarToggler onClick={this.toggle} />
	          <Collapse isOpen={this.state.isOpen} navbar>
	            <Nav className="ml-auto" navbar>
	              <NavItem>
	                <NavLink tag={Link} to="/" active={currentPathname==='/'||currentPathname===''?true:false}>Search</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink tag={Link} to="/naughty/" active={currentPathname==='/naughty/'?true:false}>Naughty List</NavLink>
	              </NavItem>
	              <NavItem>
	                <NavLink tag={Link} to="/about/" active={currentPathname==='/about/'?true:false}>About & FAQ </NavLink>
	              </NavItem>
              </Nav>
	          </Collapse>
	        </Navbar>
		)
	}
}

const HeaderBarWithRouter = withRouter(HeaderBar);
export default HeaderBarWithRouter;