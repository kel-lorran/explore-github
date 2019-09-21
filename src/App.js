import React from 'react';
import './App.scss';
import { HashRouter } from 'react-router-dom'
import Routes from './components/Routes'

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="container">
          <Routes />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
