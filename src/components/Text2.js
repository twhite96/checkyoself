import React from 'react'
import SimpleMDEReact from 'react-simplemde-editor';
import '../simplemde.min.css';
import Popup from 'reactjs-popup';
import tippy from 'tippy.js';
import writeGood from 'write-good';
import { renderToString } from 'react-dom/server';
import BurgerIcon from './BurgerIcon';
import Menu from './Menu';
import Footer from './Footer';
import '../antd.css';


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
class Text2 extends React.Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }
  defaultProps = {
    delay: 1000,
    value: ""
  };


  state = {
    value: localStorage.getItem(`smde_${this.props.id}`) || this.props.value
  };


  handleChange1 = value => {
    const editor = this.inputRef.current
    const { editorEl } = editor;
    const errors = editorEl.querySelectorAll('.cm-spell-error');
    if (errors.length) {
      Array.from(errors).forEach(err => {
        const suggestions = writeGood(err.textContent);
        console.log(suggestions, err.textContent);
        new tippy(err, {
          content: 'Fix this wrong thing',
          placement: 'bottom'
        });
      });
    }
    console.log(errors);
  };
  render() {
    const { options, delay, id, ...rest } = this.props;
    return (
      <div>
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
            <SimpleMDEReact
              {...rest}
              id={id}
              value={this.state.value}
              options={{
                autosave: {
                  enabled: true,
                  uniqueId: id,
                  delay
                },
                ...options
              }}
            />
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Text2;
