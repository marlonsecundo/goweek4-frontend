import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Login, Timeline } from './pages';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Login}></Route>
          <Route path='/timeline' component={Timeline}></Route>

        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
