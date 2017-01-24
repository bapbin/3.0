import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Jumbotron,
  Button,
  Card,
  CardBlock
} from 'reactstrap';
import './css/App.css';

import Header from './Header';

class App extends Component {
  
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
      <div className="App">

        <Header tagline="3.0"/>

        <Navbar color="inverse" inverse toggleable>
          <NavbarToggler right onClick={this.toggle} />
          <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <Jumbotron>
          <h1>Welcome to React</h1>
          <p>
            <Button
              tag="a"
              color="success"
              size="large"
              href="http://reactstrap.github.io"
              target="_blank"
            >
              View Reactstrap Docs
            </Button>
          </p>
          <Card>
            <image className="card-img-top" src="..." alt="Card cap"/>
            <CardBlock>
              <h4 className="card-title">Card title</h4>
              <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </CardBlock>
          </Card>       
        </Jumbotron>
      
        <script src="https://unpkg.com/reactstrap/dist/reactstrap.min.js">
          {console.log("cdn")}
        </script>

      </div>
    );
  }
}

export default App;
