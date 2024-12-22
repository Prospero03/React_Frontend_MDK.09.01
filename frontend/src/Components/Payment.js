import React from 'react'
import styled from 'styled-components';
import Navbar from './Navbar';

import { useStateValue } from '../StateProvider';

import { getBasketTotal } from '../reducer';
import CurrencyFormat from 'react-currency-format';


import {CardElement, } from '@stripe/react-stripe-js'
//useElements, useStripe
function Payment () {

    const [{adress, basket}] = useStateValue();

    //const elements = useElements();
    //const stripe = useStripe();
  return (
    <Container>
        <Navbar/>
        <Main>
            <ReviewContainer>
                <h2>Детали Вашего Заказа</h2>
                <AdressContainer>

                    <h5>Данные Доставки : </h5>

                    <div>
                        <p>Имя: {adress.name}</p>
                        <p>Телефон : {adress.phone}</p>
                        <p>Email : {adress.email}</p>
                        <p>Адрес :</p>
                        <p>- Город : {adress.city }</p>
                        <p>- Улица : {adress.street}</p> 
                        <p>- Дом | Квартира : {adress.apart}</p> 
                    </div>
                </AdressContainer>

                <PaymentContainer>
                    <h5>Оплата :</h5>
                    <div>
                        <p>Введите номер карты:</p>
                    {/*CardElemnent*/}
                    <CardElement/>

                    </div>
                </PaymentContainer>

                <OrderContainer>
                    <h5>Ваш Заказ : </h5>
                    <div>
                        {basket?.map((product) => (

                        <Product>
                        <Image>
                            <img src={product.image} alt="" />
                        </Image>

                        <Description>
                            
                            <h4>{product.title}</h4> 
                            <p>{product.price} руб.</p>

                        </Description>
                        </Product>

                        ))}
                    </div>
                </OrderContainer>
            </ReviewContainer>
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

                <button> Оплатить </button>
        </Subtotal>
        </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    max-width: 1800px;
    background-color: aliceblue;
    
`;

const Main = styled.div`
    max-width: 70%;
    margin:auto;
    padding: 15px;
    display: flex;
    margin-top: 20px;

    @media only screen and (max-width:1060px){
        flex-direction: column;
    }
    @media only screen and (max-width:767px){
      max-width: 100%;
    }

`;

const ReviewContainer = styled.div`
    background-color: #fff;
    flex:0.7;
    padding: 15px;
    h2{
        font-weight: 500;
        border-bottom: 1px solid lightgray;
        padding-bottom: 15px;
    }
`;

const AdressContainer = styled.div`
    margin-top: 20px;
    div{
        margin-top:10px;
        margin-left: 10px;
    }
    p{
        font-size: 14px;
        margin-top:4px;
    }
`;
const PaymentContainer = styled.div`
    max-width: 50%;
    margin-top:15px;
    
    @media only screen and (max-width:1400px){
      max-width: 100%;
    }
    
    div{
        margin-top:10px;
        margin-left:15px;
        @media only screen and (max-width:1400px){
          margin-left:15px;
        }
    }
    p{
        font-size: 14px;
    }
`;

const OrderContainer =styled.div`
    margin-top: 30px;
    

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
  margin-top: 10px;
`;

const Image =  styled.div`
  flex: 0.2;
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

export default Payment