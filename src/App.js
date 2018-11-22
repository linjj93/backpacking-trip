import React, { Component } from 'react';
import {
  BrowserRouter,
  Route  
} from 'react-router-dom';
  

import Nav from "./components/Nav";
import Beijing from "./components/cities/Beijing";
import Chengdu from "./components/cities/Chengdu";
import XiAn from "./components/cities/XiAn";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path = "/beijing" render = { () => <Beijing/> } />
          <Route path = "/chengdu" render = { () => <Chengdu/> } />
          <Route path = "/xian" render = { () => <XiAn/> } />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
