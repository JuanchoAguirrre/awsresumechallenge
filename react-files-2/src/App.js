import './App.css';
import Body from './components/Body/index.js';
import Header from './components/Header/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit Test.
        </p>
        <Header />
        <Body />

      </header>
    </div>
  );
}

export default App;
