import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Hello from './components/hello/Hello';
import Counters from './components/counter/Counters';
import Form from './components/form/Form';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        Hello world
        <ul>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/form'>Form</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path='/' component={Hello} />
          <Route path='/counter' component={Counters} />
          <Route path='/form' component={Form} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
