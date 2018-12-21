import React, { Component } from 'react';
import {
  //Footer,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  //NavLink
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import './App.css';


class App extends Component {

  render() {
    return (
    <Router>
    <div>
<Navbar collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><span className="fas fa-moon-o"></span> Demo</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav bsStyle="pills">
      <LinkContainer exact to={'/'}>
        <NavItem eventKey={1}>
          Página de inicio
        </NavItem>
      </LinkContainer>
      <LinkContainer to={'/lorem'}>
        <NavItem eventKey={2} title="Lorem">
          Lorem
        </NavItem>
      </LinkContainer>
      <LinkContainer to={'/ipsum'}>
        <NavItem eventKey={3} disabled>
          Ipsum
        </NavItem>
      </LinkContainer>
      <LinkContainer to={'/about'}>
        <NavItem eventKey={4}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
<main>
            <Routes />
          </main>
    </div>
    </Router>
    );
  }
}

export default App;
