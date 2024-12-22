import React from 'react'
import { useStateValue } from '../StateProvider'
import styled from 'styled-components';
import Navbar from './Navbar';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from '../reducer';
import { useNavigate } from 'react-router-dom';


function Checkout () {
    const [{basket}, dispatch] = useStateValue();
    const navigate = useNavigate()
    /*Удаление из корзины */
    const removeFromBasket = (e,id) =>{
      e.preventDefault();

      dispatch ({
        type:'REMOVE_FROM_BASKET',
        id:id 
      })
    };

    console.log("checkout>>>", basket);
  return (
    <Container>
      <Navbar/>
      <Main>

        <ShoppingCart>
          <h2>Корзина</h2>

          {basket?.map((product) => (

              <Product>
                <Image>
                  <img src={product.image} alt="" />
                </Image>

                <Description>
                  
                  <h4>{product.title}</h4> 
                  <p>{product.price} руб.</p>
                  <button onClick={(e)=> removeFromBasket(e,product.id)}>Убрать</button>

                </Description>
               </Product>

            ))}
        </ShoppingCart>



        <Subtotal>
          <CurrencyFormat 
            renderText={(value) => ( 
              <>
              <p> 
                Общая сумма ({basket.length} шт. ) : <br />
                <strong>{value}</strong>
              </p>
              
              <small>
                <input type = 'checkbox'/>
                <span>Получить подарок</span>
              </small>
              
              </> 
              
            )}
            decimalScale={2}
            value={getBasketTotal(basket)}
            displayType='text'
            thousandSeparator={true}
            suffix={" Руб"}
        />

        <button onClick={() => navigate("/adress")}> Оформить Заказ</button>
        </Subtotal>

      </Main>
    </Container>
  )
}
//height: fit-content;
const  Container = styled.div`
  width: 100%;
  max-width: 1800px;
  min-height: 100vh;
  margin: auto;
  background-color: aliceblue;
  
  position:relative;
`;

const Main = styled.div`
  max-width: 70%;
  margin: auto;
  display:flex;
  padding: 15px;
  margin-top: 20px;
  

  @media only screen and (max-width: 1060px){
    flex-direction:column;
  }
  @media only screen and (max-width:767px){
    max-width: 100%;
  }

  
`;

const ShoppingCart = styled.div`
  padding: 15px;
  background-color: #fff;
  flex: 0.7;

  h2{
    padding-left: 10px;
    font-size: 28px;
    font-weight: 500;
    border-bottom: 1px solid lightgray;
    padding-bottom: 15px;

    @media screen only and (max-width: 1060px){
      flex:none;
    }
  }
`;

const Subtotal = styled.div`
  
  flex:0.3;
  margin-left: 15px;
  padding-bottom: 20px;
  background-color: white;
  height: 200px;
  display:flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 1060px){
    margin-left: 0px;
  }

  p{
    font-size: 20px;
    display: flex;
    flex-direction: column;
    gap: 5px;
    align-items: center;
    justify-content; center;

    @media only screen and (max-width: 400px){
      font-size: 14px;
    }
  }
  
  small{
    display: flex;
    align-items: center;
    margin-top:10px;

    span{
      margin-left:10px;

    }
  }

  button{
    width: 65%;
    height: 35px;
    margin-top: 20px;
    background-color: #d874fc;
    cursor:pointer;
    transition: all ease 0.5s;
    border: none;
    outline: none;
    font-weight:600;
    color: #fff;
    border-radius: 5px;
    
    &:hover{
    background-color: black;
    color: #d874fc;
    
    }
  }

  @media only screen and (max-width:1060px){
    flex:none;
    margin-top: 15px; 
  }
`;

const Product = styled.div`
  display:flex;
  align-items: center;
  margin-top: 20px;
`;

const Image =  styled.div`
  flex: 0.3;
  padding-right: 5px;
  img{
    
    width: 90%;
    
  }
`;

const Description = styled.div`
  flex: 0.7;

  h4{
    font-weight: 500;
    font-size: 18px;
  }

  p{
    font-weight: 600;
    margin-top: 10px;
  }

  button {
    background-color: transparent;
    border: none;
    color: #1384b4;
    outline: none;
    cursor: pointer;
    margin-top: 10px;
    transition: all ease 0.5s;

    &:hover{
      text-decoration:underline;
    }
  }
`;

export default Checkout