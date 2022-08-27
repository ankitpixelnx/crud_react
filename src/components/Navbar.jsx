import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default class NavExample extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="light" dark expand="md">
          <NavbarBrand href="/">Programmers Point ERP</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink className="nav-link" to="/">Home</NavLink>
              </NavItem>
              <NavItem>
              <NavLink  className="nav-link" to="/about">About Us</NavLink>
              </NavItem>
              <NavItem>
              <NavLink  className="nav-link" to="/contact">Contact Us</NavLink>
              </NavItem>
              <NavItem>
              <NavLink  className="nav-link" to="/service">Services</NavLink>
              </NavItem>
              <NavItem>
              <NavLink  className="nav-link" to="/admin">Admin</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}