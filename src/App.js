import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment';


function App() {

  return (
    
      <div className="app">
        <Router>
            <Switch>
              <Route path="/checkout">
                <Header />
                <Checkout />
              </Route>
              <Route path="/payment">
                <Payment />
              </Route>
              <Route exact path="/">
                <Header />
                <Home />
              </Route>
            </Switch>
          </Router>
      </div>
    
    
  );
}

export default App;
