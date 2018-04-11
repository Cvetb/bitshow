import React, { Component } from 'react';
import Header from './partials/Header'
import Footer from './partials/Footer'
import { Route, Switch } from "react-router-dom";
import Home from './HomePage'
import { ShowInfoPage } from './ShowInfoPage';

class App extends Component {
  render() {
    return (
      <div className="">
      <Header/>
       
        <Switch>
        <Route  exact path="/" component={Home} />
        <Route path="/ShowInfoPage/:id" component={ShowInfoPage} />
      </Switch>
          
        
        <Footer/>
      </div>
    );
  }
}

export default App;
