import './App.css';
import Home from './components/Home/Home';
import BookCreate from './components/BookCreate/BookCreate';
import Wish from './components/Wish/Wish';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
          <Route path="/bookcreate">
            <BookCreate />
          </Route>
          <Route path="/wish">
            <Wish></Wish>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
