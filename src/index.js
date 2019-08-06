import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import './custom.scss';
import App from './components/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers' //default export from index.js in reducers folder
import middleware from './middleware'

const store = createStore(reducer, middleware)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));




