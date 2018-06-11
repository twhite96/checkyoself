import React, { Component } from 'react';
import { Hero } from '../components';
import { Title, SubTitle, Container } from 'reactbulma';


class Header extends Component {
  render() {
    return (
      <Hero primary>
        <Hero.Body>
          <Container>
            <Title>
              Check Yo Self
            </Title>
            <SubTitle>
              Markdown Grammar Checker for Blog posts
            </SubTitle>
          </Container>
        </Hero.Body>
      </Hero>
    );
  }
}

export default Header;
