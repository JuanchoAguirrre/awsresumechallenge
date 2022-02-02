import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume/';
import Header from './components/Header/';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit Test! <code>src/App.js</code> and save to reload.
        </p>
        <Header />
        <Resume />

      </header>
    </div>
  );
}

export default App;
