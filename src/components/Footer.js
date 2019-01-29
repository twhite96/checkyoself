/* jshint ignore: start */
import React from 'react';
import { Hero, SubTitle, Container } from 'reactbulma';
import '../smde-editor.css';

class Footer extends React.Component {
  render() {
    return (
      <Hero className="change-header push-down">
        <Hero.Foot>
          <Container>
            <SubTitle className="change-text"> &copy; 2017 - {(new Date().getFullYear())} Tiffany White</SubTitle>
            <SubTitle className="change-text">
              Made with ❤️in Pittsburgh
            </SubTitle>
          </Container>
        </Hero.Foot>
      </Hero>
    );
  }
}

export default Footer;

