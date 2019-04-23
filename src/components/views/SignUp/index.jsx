import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// Externals
import PropTypes from 'prop-types';
import compose from 'recompose/compose';

// Material helpers
import { withStyles } from '@material-ui/core/styles/index';

// Material components
import Button from '@material-ui/core/Button/index';
import Checkbox from '@material-ui/core/Checkbox/index';
import CircularProgress from '@material-ui/core/CircularProgress/index';
import Grid from '@material-ui/core/Grid/index';
import IconButton from '@material-ui/core/IconButton/index';
import TextField from '@material-ui/core/TextField/index';
import Typography from '@material-ui/core/Typography/index';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';

// Component styles
import styles from './styles';

class SignUp extends Component {
  state = { isLoading: false };

  handleBack = () => {
    const { history } = this.props;

    history.goBack();
  };

  handleSignUp = () => {
    const { history } = this.props;

    this.setState({ isLoading: true }, () => {
      setTimeout(() => {
        history.push('/sign-in');
      }, 1500);
    });
  };

  render() {
    const { classes } = this.props;
    const { isLoading } = this.state;

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
                    Create new account
                  </Typography>
                  <Typography className={classes.subtitleText} variant="body1">
                    Use your work email to create new account... it's free.
                  </Typography>
                  <div className={classes.fieldsWrapper}>
                    <TextField
                      className={classes.textField}
                      label="First name"
                      variant="outlined"
                    />
                    <TextField
                      className={classes.textField}
                      label="Last name"
                      variant="outlined"
                    />
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
                    <div className={classes.policyWrapper}>
                      <Checkbox
                        className={classes.policyCheckbox}
                        color="primary"
                      />
                      <Typography
                        className={classes.policyText}
                        variant="body1">
                        I have read the &nbsp;
                        <Link className={classes.policyUrl} to="#">
                          Terms and Conditions
                        </Link>
                        .
                      </Typography>
                    </div>
                  </div>
                  {isLoading ? (
                    <CircularProgress className={classes.progress} />
                  ) : (
                    <Button
                      className={classes.signUpButton}
                      color="primary"
                      onClick={this.handleSignUp}
                      size="large"
                      variant="contained">
                      Sign up now
                    </Button>
                  )}
                  <Typography className={classes.signIn} variant="body1">
                    Have an account?{' '}
                    <Link className={classes.signInUrl} to="/sign-in">
                      Sign In
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

SignUp.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};

export default compose(
  withRouter,
  withStyles(styles)
)(SignUp);
