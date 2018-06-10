import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { injectGlobal, ThemeProvider } from 'styled-components';

import { themeOne } from './themeOne';
import { themeTwo } from './themeTwo';

import Homepage from './containers/Homepage/Homepage';

injectGlobal`
* {box-sizing: border-box;}
  body {background-color: #81F7E5;}
`;

const breakpointValues = {
  xs: 322,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const breakpoints = createMuiTheme({ breakpoints: { values: breakpointValues } });

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={themeOne}>
        <MuiThemeProvider theme={breakpoints}>
          <div className="App">
            <Homepage />
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
    );
  }
}

export default App;
