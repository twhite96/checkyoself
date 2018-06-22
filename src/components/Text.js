/* jshint ignore: start */

import React, { Component } from 'react';
import SimpleMDEReact from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import Popup from 'reactjs-popup';
import Hello from '../components/Hello';
import BurgerIcon from '../components/BurgerIcon';
import Menu from '../components/Menu';

let counter = 1;


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
const editorStyle = {
  margin: '2em 2em'
};

class Text extends Component {

  state = {
    textValue1: 'Add your markdown here.',
  };
  extraKeys = () => {
    return {
      Up: function (cm) {
        cm.replaceSelection(' surprise. ');
      },
      Down: function (cm) {
        cm.replaceSelection(' surprise again! ');
      }
    };
  };

  handleChange1 = value => {
    this.setState({
      textValue1: value
    });
  };


  handleTextChange = () => {
    this.setState({
      textValue1: `Changing text by setting new state. ${counter++}`
    });
  };

  createMarkdown(event) {
    event.preventDefault();
    this.props.history.push('/text')
  }

  render() {
    return (
      <div>
        <div style={styles}>
          <Hello name="Check your markdown here." />
          <Popup
            modal
            overlayStyle={{ background: "rgba(255,255,255,0.98" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={open => <BurgerIcon open={open} />}
          >
            {close => <Menu close={close} />}
          </Popup>

          <button
            style={{ display: "inline-block", margin: "10px 0" }}
            onClick={this.handleTextChange}
          >
            Click me to update the textValue outside of the editor
          </button>
          <SimpleMDEReact
            editorStyle={editorStyle}
            label="Markdown Editor"
            value={this.state.textValue1}
            onChange={this.handleChange1}
            options={{
              autofocus: true,
              spellChecker: true,
              // etc.
            }}
          />
        </div>
      </div>
    );
  }
}

export default Text;


