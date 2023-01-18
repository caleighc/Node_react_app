import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Bio from './components/Bio';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bio" element={<Bio />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;


