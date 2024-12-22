import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import styled from 'styled-components';
import Home from './Components/Home';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Checkout from './Components/Checkout';
import Adress from './Components/Adress';
import Payment from './Components/Payment';
import Profile from './Components/Profile';

import {Elements} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import AddProduct from './Components/AddProduct';
import EditPage from "./Components/EditPage";


const promise = loadStripe(
    " pk_test_51QTijK044UhUlRE5NYYsuOMvYZzzZ2v7HP1atuDwDVYADw39BiJeaCHWiJNTlJdIdmrTnak9oge7eYvKUQNsPZiI00rg2i5q88 "
);

function App() {
  /*
  const [basket, setBasket] = useState([]);
  console.log("basket >>>>", basket);
  */

  return (
    <Router>
      <Container>
        <Routes>
          <Route 
            path="/" 
            element={<Home 
              /*basket={basket} 
              setBasket={setBasket} */ />}
          />

          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/adress" element={<Adress />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/editpage" element={<EditPage/>}/>
          <Route 
            path="/payment" 
            element={ 
              <Elements stripe={promise}> 
                <Payment/> 
              </Elements> 
          }
          />
          

          <Route path="/addproduct" element={<AddProduct />}/>

        </Routes>
      </Container>
    </Router>
  );
}

const Container = styled.div`
    width: 100vw;
  `;

export default App