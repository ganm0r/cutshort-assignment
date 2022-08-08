import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import { edenTheme } from 'theme';

import App from './App';

const root = document.getElementById('root');

ReactDOM.render(
  <ThemeProvider theme={edenTheme}>
    <App />
  </ThemeProvider>,
  root
);
