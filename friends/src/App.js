import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Friends from './components/Friends';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/friends' component={Friends} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
