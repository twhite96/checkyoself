import React, { Component } from 'react';
import Header from './Header';
import { MarkdownPreview, LiveMarkdownTextarea } from 'react-marked-markdown';
import Popup from 'reactjs-popup';
import Hello from '../components/Hello';
import BurgerIcon from '../components/BurgerIcon';
import Menu from '../components/Menu';


const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
  marginTop: '40px'
};
const contentStyle = {
  background: 'rgba(255,255,255,0)',
  width: '80%',
  border: 'none'
};
class Text extends Component {
  constructor(props) {
    super(props)
    this.createMarkdown = this.createMarkdown.bind(this)
  }

  createMarkdown(event) {
    event.preventDefault();
    this.props.history.push('/text')
  }

  render() {
    return (
      <div>
        <div>
          <Header /> {this.props.children}
        </div>
        <div style={styles}>
          <Hello name="Create cool burger menu using reactjs-popup" />
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>
        </div>
      </div>
    );
  }
}

export default Text;
