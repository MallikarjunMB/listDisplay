import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

export default class Navbar extends React.Component {
  render() {
    return (
      <div>
        <Nav className="ml-auto" pills>
          <NavItem>
            <NavLink href="/home" >Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/list" >List</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}

