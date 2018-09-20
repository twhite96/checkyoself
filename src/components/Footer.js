/* jshint ignore: start */
import React from 'react';
import { Hero, SubTitle, Container } from 'reactbulma';
import '../smde-editor.css';

class Footer extends React.Component {

  // componentDidMount() {
  //   const s = document.createElement('script');
  //   s.type = 'text/javascript';
  //   s.innerHTML = document.write(new Date().getFullYear());
  //   this.instance.appendChild(s);
  // }
  render() {
    return (
      <Hero className="change-header push-down">
        <Hero.Foot>
          <Container>
            <SubTitle className="change-text">2018 &copy; Tiffany White</SubTitle>
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

