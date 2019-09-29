import React from 'react';
import ReactDOM from 'react-dom';

import createBridge from './bridge';

import './tailwind.scss';
import './styles/index.scss';

import App from './App';

createBridge();
ReactDOM.render(<App />, document.getElementById('__root'));
