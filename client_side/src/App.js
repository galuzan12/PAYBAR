import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Components/Pages/HomePage/HomePage';
import CheckoutPage from './Components/Pages/CheckoutPage/Checkout';
import DipositCreditCardPage from './Components/Pages/DipositCreditCardPage/DipositCreditCardPage';

function App() {

  const [creditCardDiposit, setCreditCardDeposit] = useState(false);

  useEffect(() => {
    // only before rendering - will check in the server if customer disposit credit card or no

  }, [])

  return (
    <Container dir="rtl" fluid className="App">
      <Router>
        <Switch>
        <Route exact path="/"><HomePage /></Route>
          {/* {creditCardDiposit ?
            <React.Fragment>
              <Route exact path="/"><HomePage /></Route>
              <Route path="/"><CheckoutPage /></Route>
            </React.Fragment> :
            <React.Fragment>
              <Route exact path="/"><DipositCreditCardPage setCreditCardDeposit={setCreditCardDeposit} /></Route>
            </React.Fragment>
          } */}
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
