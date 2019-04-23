// Material helpers
import { createMuiTheme } from '@material-ui/core/styles/index';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const theme = createMuiTheme({
  palette,
  typography,
  overrides
});

export default theme;
