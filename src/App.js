import {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header/Header';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'; 
import Home from './components/Home/Home';
import Checkout from './components/Checkout/Checkout';
import Payment from './components/Payment/Payment';
import Order from './components/Order';
import { useDispatch } from 'react-redux';


function App() {

  const [data,setData]= useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchParam, setsearchParam] = useState('');

  console.log('app.js',data);

  const dispatch = useDispatch;


  const getData=()=>{
     fetch('product.json',
     {
       headers : { 
         'Content-Type': 'application/json',
         'Accept': 'application/json'
        }
     })
       .then(function(response){
         return response.json();
       })
       .then(function(myJson) {
         setData(myJson)
       }
     );
   }

   useEffect(()=>{
     getData();
    //  addData();
   },[])

   const filterSearch = (filteredList, param)=>{
     setFilteredData(filteredList);
      setsearchParam(param);
   }

  const getSearchData = () => {
     return searchParam.length===0 ? data:filteredData
  }

  return (
    <div className="app">
        <Router>
            <Switch>
              <Route path="/checkout">
                <Header filterSearch={filterSearch}/>
                <Checkout />
              </Route>
              <Route path="/payment">
              <Header filterSearch={filterSearch}/>
                <Payment />
              </Route>
              <Route path="/orderconfirm">
                <Order />
              </Route>
              <Route exact path="/">
                <Header filterSearch={filterSearch}/>
                <Home searchData={getSearchData()}/>
              </Route>
            </Switch>
          </Router>
      </div>
  );
}

export default App;
