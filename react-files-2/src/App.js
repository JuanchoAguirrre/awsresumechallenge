import { ThemeProvider } from 'styled-components';
import React from 'react'
import Body from './components/Body.js';
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import StyleGlobal from './components/styles/Global.js';

export const theme = {
  colors: {
      header: 'rgb(98.4%,93.3%,75.7%, 0.8)',
      innerBody: '#FBEEC1',
      outerBody:'rgb(85.5%,67.8%,52.5%, 0.8)',
      backgroundFill:'#659DBD  '
  }
}

function App() {

  return (

    <ThemeProvider theme = {theme}>    
    <StyleGlobal/>
        <Header  className="App-header"/>
        <Body />
        <Footer />
    </ThemeProvider>

  );
}

export default App;
