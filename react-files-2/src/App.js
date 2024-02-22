import { ThemeProvider } from 'styled-components';
import React from 'react'
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import StyleGlobal from './components/styles/Global.js';

export const theme = {
  colors: {
    header: '#659DBD' ,
    innerBody: '#659DBD',
    outerBody: '#93b7cc',
    backgroundFill: '#659DBD'
  }
}

function App() {

  return (

    <ThemeProvider theme={theme}>
      <StyleGlobal />
        <Header />
        <Body />
        <Footer />
    </ThemeProvider>

  );
}

export default App;
