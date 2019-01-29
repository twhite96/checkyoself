/* jshint ignore: start */
import React from 'react';
import SimpleMDEReact from 'react-simplemde-editor';
import 'simplemde/dist/simplemde.min.css';
import Popup from 'reactjs-popup';
import BurgerIcon from '../components/BurgerIcon';
import Menu from '../components/Menu';
import '../smde-editor.css';
import writeGood from 'write-good';
import Footer from '../components/Footer';

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

const WriteGood = ({ text }) => (
  <div>{writeGood(text).map(({ suggestion }) => suggestion)}</div>
);

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: 'Check your markdown here.',
      text: {}
    };
  }
  extraKeys = () => {
    return {
      Up: function(cm) {
        cm.replaceSelection(' surprise. ');
      },
      Down: function(cm) {
        cm.replaceSelection(' surprise again! ');
      }
    };
  };

  handleChange1 = value => {
    this.setState({
      textValue: value
    });
  };

  handleTextChange = markup => {
    this.setState({
      text: markup
    });
  };

  render() {
    return (
      <React.Fragment>
        <div>
          <div style={styles}>
            <Popup
              modal
              overlayStyle={{ background: 'rgba(255,255,255,0.98)' }}
              contentStyle={contentStyle}
              closeOnDocumentClick={false}
              trigger={open => <BurgerIcon open={open} />}
            >
              {close => <Menu close={close} />}
            </Popup>

            {/* <button
            style={{ display: "inline-block", margin: "10px 0" }}
            onClick={this.handleTextChange}
          >
            Click me to update the textValue outside of the editor
          </button> */}
            <SimpleMDEReact
              className="smde-editor-styles"
              editorStyle={editorStyle}
              // suggested={this.editorState}
              label="Markdown Editor"
              onChange={this.handleChange1}
              options={{
                autofocus: true,
                spellChecker: true
                // etc.
              }}
              value={this.state.textValue}
              markup={this.state.text}
            />
            <WriteGood />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}

export default Text;
