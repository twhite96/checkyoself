import React from 'react';
import Popup from 'reactjs-popup';
import BurgerIcon from '../components/BurgerIcon';
import Menu from '../components/Menu';
import { Editor, EditorState, RichUtils } from 'md-draft-js';
import {WriteGood, suggestionStrategy} from '../helpers/write_good';
import Footer from '../components/Footer';

class Text extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editorState: EditorState.createWithContent('Write your markdown here.') };
    this.onChange = (editorState) => this.setState({ editorState });
    this.handleKeyCommand = this.handleKeyCommand.bind(this);
  }
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
            <Editor
              autoFocus
              className="editor-textarea"
              editorState={this.state.editorState}
              onKeyCommand={this.handleKeyCommand}
              onChange={this.onChange}
            />
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
