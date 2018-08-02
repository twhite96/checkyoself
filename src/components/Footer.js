import React from 'react';
import { Hero, Title, SubTitle, Container } from 'reactbulma';
import '../smde-editor.css';

class Footer extends React.Component {
  render() {
    return (
      <Hero className="change-header push-down">
        <Hero.Foot>
          <Container>
            <Title className="change-text">
              Primary title
            </Title>
            <SubTitle className="change-text">
              Primary subtitle
            </SubTitle>
          </Container>
        </Hero.Foot>
      </Hero>
    );
  }
}

export default Footer;
