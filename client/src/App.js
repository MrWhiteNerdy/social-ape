import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <div className="container">
          <Switch>
            <Route exact path="/" component={home}></Route>
            <Route exact path="/login" component={login}></Route>
            <Route exact path="/signup" component={signup}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
