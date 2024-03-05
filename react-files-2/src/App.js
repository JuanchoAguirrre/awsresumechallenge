import { ThemeProvider } from 'styled-components';
import React from 'react'
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import StyleGlobal from './components/styles/Global.js';

export const theme = {
  colors: {
    header: '#4e7c96' ,
    innerBody: '#456c82',
    outerBody: '#4e7c96',
    backgroundFill: '#4e7c96'
  }
}

function App() {

  return (

    <ThemeProvider theme={theme}>
      <StyleGlobal/>
        <Header/>
        <Body/>
        <Footer />
    </ThemeProvider>

  );
}

export default App;
