import { ThemeProvider } from 'styled-components';
import Body from './components/Body/index.js';
import Header from './components/Header/index.js';
import StyleGlobal from './components/styles/Global.js';

export const theme = {
  colors: {
      header: '#33BDFF',
      innerBody: '#FFFFFF',
      outerBody:'#2F30B8'
  }
}

function App() {
  return (

    <ThemeProvider theme = {theme}>    
    <StyleGlobal/>
      <div className="App">
      <header>
        <Header  className="App-header" />
        <Body />

      </header>
      </div>
    </ThemeProvider>

  );
}

export default App;
