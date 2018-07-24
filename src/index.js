/* jshint ignore: start */


import React from 'react';
import './App.css';
import { render } from 'react-dom';
import Header from './components/Header';
import Popup from 'reactjs-popup';
import BurgerIcon from './components/BurgerIcon';
import Menu from './components/Menu';
import Text from './components/Text';
// import SimpleMDEReact from 'react-simplemde-editor';
// import 'simplemde/dist/simplemde.min.css';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
// import { Redirect } from 'react-router-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotFound from './components/NotFound';

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


const Home = () => (
  <div>
    <h2>Hey! <span role="img">👋🏾</span></h2>
    <p>This is Check Yo Self, an app to check the <span class="highlight">grammar and spelling</span> of your <span class="highlight">markdown blog posts</span>.</p>
  </div>
);

// const Contact = () => (
//   <div>
//     <h2>Contact Page</h2>
//   </div>
// );

const App = () => (
  <React.Fragment>
    <div>
      <Header />
    </div>
    <Router>
      <div style={styles}>
        <Popup
          modal
          overlayStyle={{ background: "rgba(255,255,255,0.98" }}
          contentStyle={contentStyle}
          closeOnDocumentClick={false}
          trigger={open => <BurgerIcon open={open} />}
        >
          {close => <Menu close={close} />}
        </Popup>

        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/text" component={Text} />
          <Route component={NotFound} />
          {/* <Route path="/contact" component={Contact} /> */}
        </Switch>
      </div>
    </Router>
  </React.Fragment>
);

render(<App/>, document.getElementById("root"));

registerServiceWorker();
