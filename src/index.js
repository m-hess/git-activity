import React from 'react';
import ReactDOM from 'react-dom';
import './style.scss';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose } from 'redux';
// import reducers from './reducers';
// import Network from './components/network';
import App from './components/app';
/* eslint-disable no-undef */

ReactDOM.render(<App />, document.getElementById('main'));

// // this creates the store with the reducers, and does some other stuff to initialize devtools
// // boilerplate to copy, don't have to know
// const store = createStore(reducers, {}, compose(
//   applyMiddleware(),
//   window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => { return (f); },
// ));

// // we now wrap App in a Provider
// ReactDOM.render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('main'),
// );
