import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles/index';

// Theme
import theme from './theme';
import './assets/scss/index.scss';

// Views
import SignIn from './components/views/SignIn';
import SignUp from './components/views/SignUp';
import NotFound from './components/views/NotFound';

// Browser history
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Switch>
            <Redirect
              exact
              from="/"
              to="/sign-in"
            />
            <Route
              component={SignIn}
              exact
              path="/sign-in"
            />
            <Route
              component={SignUp}
              exact
              path="/sign-up"
            />
            <Route
              component={NotFound}
              exact
              path="/not-found"
            />
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
