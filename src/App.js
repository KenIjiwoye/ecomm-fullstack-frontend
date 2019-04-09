import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './assets/css/shop-hompage.css'
import { Switch, Route } from 'react-router-dom'
import Homepage from './views/Homepage/Homepage'
import SingleItem from './views/SingleItem/SingleItem';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route exact path='/product/:name' component={SingleItem} />
        </Switch>
      </div>
    );
  }
}

export default App;
