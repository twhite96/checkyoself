/*jshint ignore: start */

import React from 'react';
import { Hero, Title, SubTitle, Container } from 'reactbulma';
import '../smde-editor.css';
import { Link } from 'react-router-dom';


class Header extends React.Component {
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
