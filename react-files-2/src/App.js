import './App.css';
import Resume from './components/Resume/index.js';
import Header from './components/Header/index.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit Test.
        </p>
        <Header />
        <Resume />

      </header>
    </div>
  );
}

export default App;
