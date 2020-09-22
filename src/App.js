import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Hello from './components/Hello';
import Counters from './components/counter/Counters';

function App() {
  console.log('App')
  return (
    <div className="App">
      Hello world
      <Hello />
      <Counters />
    </div>
  );
}

export default App;
