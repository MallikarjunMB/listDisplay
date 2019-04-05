import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from '../src/component/navbar'
import Home from '../src/component/home'
import List from '../src/component/lists'

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
      <div className="App">
        <Navbar />
        <BrowserRouter>
        <Route exact path="/" component={Home}/>
        <Route path="/home" component={Home}/>
        <Route path="/list" component={List}/>
        </BrowserRouter>
       

      </div>
      </Provider>
    );
  }
}

export default App;
