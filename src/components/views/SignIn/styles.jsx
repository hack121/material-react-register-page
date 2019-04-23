export default theme => ({
  root: {
    backgroundColor: theme.palette.background.default,
    height: '100vh'
  },
  grid: {
    height: '100%'
  },
  leftColumn: {
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  imageWrapper: {
    backgroundColor: theme.palette.common.neutral,
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundImage: 'url(/images/sign_up_1.jpg)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  },
  quoteWrapper: {
    textAlign: 'center'
  },
  quoteText: {
    color: theme.palette.common.white,
    fontWeight: 300,
    maxWidth: '600px'
  },
  nameText: {
    marginTop: theme.spacing.unit * 3,
    color: theme.palette.common.white
  },
  bioText: {
    color: theme.palette.common.white
  },
  rightColumn: {},
  contentWrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  contentHeader: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: theme.spacing.unit * 5,
    paddingBototm: theme.spacing.unit * 2,
    paddingLeft: theme.spacing.unit * 2,
    paddingRight: theme.spacing.unit * 2
  },
  backButton: {},
  logoImage: {
    marginLeft: theme.spacing.unit * 4
  },
  formWrapper: {
    flexGrow: 1,
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      justifyContent: 'center'
    }
  },
  formInner: {
    paddingLeft: '100px',
    paddingRight: '100px',
    paddingBottom: '125px',
    maxWidth: '700px',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: theme.spacing.unit * 2,
      paddingRight: theme.spacing.unit * 2
    }
  },
  titleText: {
    marginTop: theme.spacing.unit * 3
  },
  subtitleText: {
    color: theme.palette.common.muted,
    marginTop: theme.spacing.unit * 0.5
  },
  facebookButton: {
    marginTop: theme.spacing.unit * 3,
    width: '100%'
  },
  facebookIcon: {
    marginRight: theme.spacing.unit
  },
  googleButton: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  googleIcon: {
    marginRight: theme.spacing.unit
  },
  sugestion: {
    color: theme.palette.common.muted,
    marginTop: theme.spacing.unit * 2,
    textAlign: 'center'
  },
  fieldsWrapper: {
    marginTop: theme.spacing.unit * 2
  },
  textField: {
    width: '100%',
    '& + & ': {
      marginTop: theme.spacing.unit * 2
    }
  },
  policyWrapper: {
    display: 'flex',
    alignItems: 'center'
  },
  policyCheckbox: {
    marginLeft: '-14px'
  },
  policyText: {
    display: 'inline',
    color: theme.palette.common.muted
  },
  policyUrl: {
    color: theme.palette.text.primary,
    '&:hover': {
      cursor: 'pointer',
      color: theme.palette.primary.main
    }
  },
  progress: {
    display: 'block',
    marginTop: theme.spacing.unit * 2,
    marginLeft: 'auto',
    marginRight: 'auto'
  },
  signInButton: {
    marginTop: theme.spacing.unit * 2,
    width: '100%'
  },
  signUp: {
    marginTop: theme.spacing.unit * 2,
    color: theme.palette.common.muted
  },
  signUpUrl: {
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
      color: theme.palette.primary.main
    }
  }
});
