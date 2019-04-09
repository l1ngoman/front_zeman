import React, { Component } from 'react';
import { Redirect, BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Customers from './customers'
import Customer from './customers/show'
import Vendors from './vendors'
import Vendor from './vendors/show'

class App extends Component {
  render() {
    return (
      <div class='font'>
        <Router>
            <Switch>
                <Route exact path='/customers' component={Customers}/>
                <Route exact path='/customers/:id' component={Customer}/>
                <Route exact path='/vendors' component={Vendors}/>
                <Route exact path='/vendors/:id' component={Vendor}/>
            </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
