import React, { Component } from 'react';
import logo from './logo.svg';
import {Provider} from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import Root from "./components/root/rootContainer";
import './App.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
// import RootContainer from './components/RootContainer';

import createStore  from './store/createStore';

const store = createStore();

class App extends Component {

  render() {
    return (
        <Provider store={store}>
          <Router>
            <Root />
          </Router>
        </Provider>
    );
  }
}

export default App;
