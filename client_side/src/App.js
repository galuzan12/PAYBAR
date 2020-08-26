import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';

function App() {
  return (
    <Container dir="rtl" fluid className="App">
      <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
