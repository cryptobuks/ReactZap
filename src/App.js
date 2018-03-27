import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

import Routes from './Routes';
import reducers from './reducers';

function initializeFirebase() {
  const config = {
    apiKey: 'AIzaSyCg3TVZi-Ib3-DOuZiWzYW-4k4B87T9Mq4',
    authDomain: 'react-zap.firebaseapp.com',
    databaseURL: 'https://react-zap.firebaseio.com',
    projectId: 'react-zap',
    storageBucket: 'react-zap.appspot.com',
    messagingSenderId: '702651061412',
  };
  firebase.initializeApp(config);
}

class App extends Component {
  componentWillMount() {
    // Initialize Firebase
    initializeFirebase();
  }
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
