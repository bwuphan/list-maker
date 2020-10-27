import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import CreateList from './components/CreateList/CreateList';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/create">
            <CreateList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
