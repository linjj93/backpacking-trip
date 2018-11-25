import React, { Component } from 'react';
import {
  BrowserRouter,
  Route  
} from 'react-router-dom';
  

import Nav from "./components/Nav";
import Home from "./components/Home";
import Beijing from "./components/cities/Beijing";
import Chengdu from "./components/cities/Chengdu";
import Shaanxi from "./components/cities/Shaanxi";
import Anhui from "./components/cities/Anhui";
import Suhanglu from "./components/cities/Suhanglu";
import Jeju from "./components/cities/Jeju";
import Seoul from "./components/cities/Seoul";


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
          <Route path = "/homepage" render = { () => <Home/> } />
          <Route path = "/beijing" render = { () => <Beijing/> } />
          <Route path = "/chengdu" render = { () => <Chengdu/> } />
          <Route path = "/shaanxi" render = { () => <Shaanxi/> } />
          <Route path = "/anhui" render = { () => <Anhui/> } />
          <Route path = "/suhanglu" render = { () => <Suhanglu/> } />
          <Route path = "/jeju" render = { () => <Jeju/> } />
          <Route path = "/seoul" render = { () => <Seoul/> } />
        </div>
      </BrowserRouter>
      
    );
  }
}

export default App;
