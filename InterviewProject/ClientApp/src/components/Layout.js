import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { NavMenu } from './NavMenu';
import { site } from './site.css';



export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <NavMenu class="nav"/>
        <Container id="container">
          {this.props.children}
        </Container>
      </div>
    );
  }
}
