/* jshint ignore: start */

import React from 'react';
import './index.css';
import Router from './components/Router';
import { render } from 'react-dom';
import registerServiceWorker from './registerServiceWorker';



render(<Router />, document.getElementById('root'));
registerServiceWorker();
