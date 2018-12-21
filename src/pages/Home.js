import React, { Component } from 'react'
import {CSSTransition, TransitionGroup} from "react-transition-group"
import { Button,
  Fade,
  Jumbotron,
  Grid,
  Col,
  Row
} from "react-bootstrap";
//import { BrowserRouter as Router } from "react-router-dom";
//import Routes from "./Routes";
//import './App.css';
//import background from "../img/pexels-photo-258112.jpeg"


class Home extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
        pop: false
    };
  }

  componentDidMount() {
      setTimeout(() => { this.setState({pop: true}) }, 100);
  }

  render() {
      return (
<div className="full">
<Fade in={this.state.pop} appear={false} timeout={500}>
<div className="container">
<div className="row">
<Col className="col-10 mx-auto">
<Jumbotron style={{textAlign: "center"}}>
    <h1>Esqueleto <span className="fab fa-snapchat-ghost"></span></h1>
  <p>
    Esqueleto de un proyecto en <strong>react-bootsrap</strong>
  </p>
  <p className="small" style={{textAlign: "justify"}}><small>
Ullam ut error ipsam praesentium quos sint. Atque sunt dignissimos nisi. Hic qui ducimus quia dolor ut. Dolorum quisquam et vero ipsum repellat beatae reprehenderit. Quis veritatis et nihil at eligendi nemo eos. Qui nisi impedit doloremque voluptatem.
  </small></p>

  <p className="small" style={{textAlign: "justify"}}><small>
Ab quod vitae possimus earum. Iure a autem dicta. Aut mollitia omnis sint voluptatem ullam tempora.
  </small></p>

  <p className="small" style={{textAlign: "justify"}}><small>
Possimus eum fugit unde neque aut incidunt nisi velit. Laboriosam corrupti molestiae neque. Rem sunt similique nihil sequi possimus. Dolore et quia odio recusandae nobis minus.
  </small></p>
  <p>
    <Button bsStyle="primary" href="/about">Acerca de</Button>
  </p>
</Jumbotron>
</Col>
</div>
</div>
</Fade>

<Grid>
  <Row className="">
    <Col md={4} className="mb-5 card">
      <div className="col-10 mx-auto cardbody">asd</div>
    </Col>
    <Col md={4} className="mb-5 card">
      <div className="col-10 mx-auto cardbody">asd</div>
  </Col>
    <Col md={4} className="mb-5 card">
      <div className="col-10 mx-auto cardbody">asd</div>
    </Col>
  </Row>
</Grid>
<Row>
</Row>
</div>
    );
  }
}

export default Home;
