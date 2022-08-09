import React from "react";
import { Component } from "react";
import { Nav, Navbar, NavItem, NavbarToggler, Collapse } from "reactstrap";
import { NavLink } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = { collapsed: true };
  }
  toggleNavbar() {
    this.setState({ collapsed: !this.state.collapsed });
  }
  render() {
    return (
      <div>
        <div className="container-fluid Jumbo">
          <div className="row">
            <div className="col">
              <h1>
                Anyone else lie awake at night thinking of what to code next?
              </h1>
              <h2>Because i'm starting to think I have a problem...</h2>
            </div>
          </div>
        </div>
        <Navbar light sticky="top" expand="sm" className="Navvy">
          <NavbarToggler onClick={this.toggleNavbar} />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar tabs>
              <NavItem>
                <NavLink className="nav-link Boldify" to="/">
                  <i className="fa fa-home fa-lg" /> Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link Boldify" to="/Background">
                  <i className="fa fa-list fa-lg" /> Background
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link Boldify" to="/Education">
                  <i className="fa fa-info fa-lg" /> Education
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link Boldify" to="/Hobbies">
                  <i className="fa fa-address-card fa-lg" /> Hobbies
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link Boldify" to="/Writings">
                  <i className="fa fa-address-card fa-lg" /> Writings
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
