/* jshint ignore: start */

import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Text from './components/Text';
import Popup from 'reactjs-popup';
import Hello from './components/Hello';
import BurgerIcon from './components/BurgerIcon';
import Menu from './components/Menu';


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
class App extends Component {
  render() {
    return (
      <div>
        <div className="App">
          <div>
            <Header />
            {this.props.children}
          </div>
          <p className="App-intro">
            To get started, edit
            <code>src/App.js</code>
            and save to reload.
          </p>
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

export default App;



