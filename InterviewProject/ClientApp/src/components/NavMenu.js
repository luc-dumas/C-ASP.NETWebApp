import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <Navbar>
          <Container>
                <NavbarBrand><strong>Library</strong></NavbarBrand>
            
                <NavItem>
                  <NavLink tag={Link}  to="/">Book List</NavLink>
                    </NavItem>

                <NavItem>
                    <NavLink tag={Link}  to="/book">Book Entry</NavLink>
                </NavItem>
          
           
          </Container>
        </Navbar>
      </header>
    );
  }
}
