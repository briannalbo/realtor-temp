import './App.css';
import { Row, Card } from "react-bootstrap";
import Listings from './components/Listings';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      
        <p>
          
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Listings />
    </div>
  );
}

export default App;
