import logo from './logo.svg';
import './App.css';
import Resume from './components/Resume';
import Header from './components/Header';

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
