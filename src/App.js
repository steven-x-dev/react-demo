import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
// import Hello from './components/Hello';
// import Counters from './components/counter/Counters';
import Form from './components/form/Form';

function App() {
  console.log('App')
  return (
    <div className="App">
      Hello world
      {/* <Hello />
      <Counters /> */}
      <Form />
    </div>
  );
}

export default App;
