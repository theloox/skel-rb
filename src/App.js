import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import {
  Collapse,
  Glyphicon,
  MenuItem,
  Nav,
  Navbar,
  NavDropdown,
  NavItem,
  //NavLink
  Grid,
  Row,
  Col,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";
import './App.css';
import logo from './img/logo.png';


const popup = [
  {
    name: "Lorem",
    path: "/lorem",
    key: 4.1
  },
  {
    name: "Ipsum",
    path: "/ipsum",
    key: 4.2
  },
  {
    name: "Dolor",
    path: "/dolor",
    key: 4.3
  },
];


class App extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        popup: true,
    };

    this.xx = this.xx.bind(this);
  }

  submenu(par) {
    return(
        par.arr.map((route, index) => (
          <MenuItem href={route.path} eventKey={route.key}>{route.name}</MenuItem>
        )
      )
    )
  }

  xx(par) {
    return(
      <>
      <NavItem onClick={() => this.setState(par.ret)}>{par.name}<Glyphicon glyph={par.st ? "chevron-up" : "chevron-down"} style={{float: "right"}} /></NavItem>
      <Collapse in={par.st}>
      <Nav bsStyle="pills" stacked className="nav-alt2">
      {
        par.arr.map((route, index) => (
          <LinkContainer to={route.path}>
            <NavItem eventKey={route.key}>{route.name}</NavItem>
          </LinkContainer>
        ))
      }
      </Nav>
      </Collapse>
      </>
    );
  };

  render() {
    return (
<Router>
<>
<Navbar collapseOnSelect fluid>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/"><img src={logo} alt="logo" title="Esqueletito" height="32" width="32" style={{float: "left", "margin-top": -6, "margin-left": -12, "margin-right": 6}} />&nbsp;&nbsp;Esqueletito</a>
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

      <NavDropdown eventKey={4} title="Popup" id="basic-nav-dropdown">
        <this.submenu arr={popup} />
      </NavDropdown>

      <LinkContainer to={'/about'}>
        <NavItem eventKey={5}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>

<Grid fluid>
  <Row>
  <Col xs={0} sm={2} md={2} ls={2}>
    <Nav bsStyle="pills" stacked className="nav-alt">
      <LinkContainer exact to={'/'}>
        <NavItem eventKey={1}>
          Inicio
        </NavItem>
      </LinkContainer>
      <NavItem eventKey={0}  className="nav-alt" />

     <LinkContainer to={'/lorem'}>
        <NavItem eventKey={2}>
          Lorem
        </NavItem>
      </LinkContainer>

      <LinkContainer to={'/ipsum'}>
        <NavItem eventKey={3} disabled>
          Ipsum
        </NavItem>
      </LinkContainer>

      <this.xx name="Popup" arr={popup} st={this.state.popup} ret={{popup: !this.state.popup}} />
      <NavItem eventKey={0} className="nav-null" />

      <LinkContainer to={'/about'}>
        <NavItem eventKey={5}>
          Acerca de
        </NavItem>
      </LinkContainer>
    </Nav>
  </Col>
  <Col xs={12} sm={10} md={10} ls={10} className="padding-0">

<main>
  <Switch>
    <Route path="/about"
      render={() =>
  <div className="full full-about">
    <Routes />
  </div>
      } />
    <Route
      render={() =>
  <div className="full">
    <Routes />
  </div>
      } />
  </Switch>
</main>
  </Col>
  </Row>
  </Grid>
</>
</Router>
    );
  }
}

export default App;
