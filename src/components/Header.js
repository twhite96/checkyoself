import React, { Component } from 'react';
import { Hero } from '../components';
import { Title, SubTitle, Container } from 'reactbulma';
import '../smde-editor.css';


class Header extends Component {
  render() {
    return (
      <Hero className="change-header">
        <Hero.Body>
          <Container>
            <Title className="change-text">
              Check Yo Self
            </Title>
            <SubTitle className="change-text">
              Markdown Grammar Checker for Blog posts
            </SubTitle>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default Header;
