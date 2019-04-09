import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Customers from './customers'
import Vendors from './vendors'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Switch>
                <Route exact path='/customers' component={Customers}/>
                <Route exact path='/vendors' component={Vendors}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
