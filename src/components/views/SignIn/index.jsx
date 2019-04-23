import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles } from '@material-ui/core/styles/index';

// Material components
import Grid from '@material-ui/core/Grid/index';
import Button from '@material-ui/core/Button/index';
import CircularProgress from '@material-ui/core/CircularProgress/index';
import IconButton from '@material-ui/core/IconButton/index';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Shared components
import FacebookIcon from 'components/icons/Facebook';
import GoogleIcon from 'components/icons/Google';

// Component styles
import styles from './styles';

class SignIn extends Component {
  state = { isLoading: false };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  handleSignIn = () => {
    const { history } = this.props;

    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        localStorage.setItem('isAuthenticated', true);
        history.push('/sign-up');
      }, 1500);
    });
  };

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state;

    if (isLoading) {
      return <CircularProgress className={classes.progress} />;
    }

    return (
      <div className={classes.root}>
        <Grid className={classes.grid} container>
          <Grid className={classes.leftColumn} item lg={5}>
            <div className={classes.imageWrapper}>
              <div className={classes.quoteWrapper}>
                <Typography className={classes.quoteText} variant="h1">
                  Hella narwhal Cosby sweater McSweeney's, salvia kitsch before
                  they sold out High Life.
                </Typography>
                <div className={classes.personWrapper}>
                  <Typography className={classes.nameText} variant="body1">
                    Takamaru Ayako
                  </Typography>
                  <Typography className={classes.bioText} variant="body2">
                    Manager at inVision
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
          <Grid className={classes.rightColumn} item lg={7} xs={12}>
            <div className={classes.contentWrapper}>
              <div className={classes.contentHeader}>
                <IconButton
                  className={classes.backButton}
                  onClick={this.handleBack}>
                  <ArrowBackIcon />
                </IconButton>
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  href="https://devias.io">
                  <img
                    alt="Devias logo"
                    className={classes.logoImage}
                    src="/images/logos/devias-logo.svg"
                  />
                </a>
              </div>
              <div className={classes.formWrapper}>
                <div className={classes.formInner}>
                  <Typography className={classes.titleText} variant="h2">
                    Sign in
                  </Typography>
                  <Typography className={classes.subtitleText} variant="body1">
                    Sign in with social media
                  </Typography>
                  <Button
                    className={classes.facebookButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    <FacebookIcon className={classes.facebookIcon} />
                    Login with Facebook
                  </Button>
                  <Button
                    className={classes.googleButton}
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    <GoogleIcon className={classes.googleIcon} />
                    Login with Google
                  </Button>
                  <Typography className={classes.sugestion} variant="body1">
                    or login with email address
                  </Typography>
                  <div className={classes.fieldsWrapper}>
                    <TextField
                      className={classes.textField}
                      label="Email address"
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      label="Password"
                      type="password"
                      variant="outlined"
                    />
                  </div>
                  <Button
                    className={classes.signInButton}
                    color="primary"
                    onClick={this.handleSignIn}
                    size="large"
                    variant="contained">
                    Sign in now
                  </Button>
                  <Typography className={classes.signUp} variant="body1">
                    Don't have an account?{' '}
                    <Link className={classes.signUpUrl} to="/sign-up">
                      Sign up
                    </Link>
                  </Typography>
                </div>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    );
  }
}

SignIn.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignIn);
