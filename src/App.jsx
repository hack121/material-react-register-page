import React, { Component } from 'react';
import { Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

// Material helpers
import { MuiThemeProvider } from '@material-ui/core/styles/index';

// Theme
import theme from './theme';
import './assets/scss/index.scss';

// Routes
import routes from './routes';

// Browser history
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Router history={browserHistory}>
          <Switch>
            {routes.map((route, i) => (
              <Route
                exact={route.exact}
                key={route.key || i}
                path={route.path}
                render={props =>
                  route.render ? (
                    route.render({ ...props, route: route })
                  ) : (
                    <route.component {...props} route={route} />
                  )
                }
                strict={route.strict}
              />
            ))}
            <Redirect to="/not-found" />
          </Switch>
        </Router>
      </MuiThemeProvider>
    );
  }
}
