import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider, createGlobalStyle } from 'styled-components';
import { edenTheme } from 'theme';

import colors from 'theme/constants/colors';
import typography from 'theme/constants/typography';
import App from './App';

const root = document.getElementById('root');

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.white};
    overflow: hidden;
    font-family: ${typography.fonts.primary};
    color: ${colors.black}; 
  }
`;

ReactDOM.render(
  <ThemeProvider theme={edenTheme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>,
  root
);
