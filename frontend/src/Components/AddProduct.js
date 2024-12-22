import axios from '../axios';
import React, { useState } from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


function AddProduct() {
    const [title, setTitle] = useState("");
    const [imageURL, setImageURL] = useState("");
    const [price, setPrice] = useState(0);


    //Backend 
    const navigate =useNavigate();

    const addProduct = (e) => {
        e.preventDefault();

        axios
            .post("/products/add", {title, imageURL, price} )
            //Обработчик then/catch
            .then(() => {
            setTitle("");
            setImageURL("");
            setPrice(0);
            
        })
        .catch((error)=> alert(error.message));

        navigate('/')
    };
  return (
    <Container>
        
        
        <FormContainer>

            <h3>Добавление Товара</h3>

            <InputContainer>
                <p>Название</p>
                <input type="text" onChange={(e)=> setTitle(e.target.value)}
                value = {title}
                
                placeholder='Name'/>
             </InputContainer>

            <InputContainer>
                <p>URL - Image</p>
                <input type="text"  onChange={(e)=> setImageURL(e.target.value)}
                value = {imageURL}
                
                placeholder='Image'/>
             </InputContainer>

             <InputContainer>
                <p>Стоимость</p>
                <input type="text"  onChange={(e)=> setPrice(e.target.value)}
                value = {price}
                />
             </InputContainer>

             

            <LoginButton onClick={addProduct} >Добавить Товар</LoginButton>

            

            

        </FormContainer>
    </Container>
  )
}

const Container = styled.div`
    
    width: 40%;
    min-width: 400px;
    min-height:100vh;
    
    margin: auto;
    padding-top: 50px;
    display:flex;
    flex-direction:column;
    align-items: center;
    
    
    border:none;

    @media only screen and (max-width: 400px){
      min-width: 375px;
    }

`;


const FormContainer = styled.form`
    border:1px solid lightgray;
    width:60%;
    height: 500px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 15px;

    @media only screen and (max-width: 1200px){
        width: 60%;
    }

    @media only screen and (max-width: 776px){
        width: 60%;
    }

    h3{
        font-size:28px;
        font-weight: 400;
        line-height:33px;
        align-self: flex-start;

        margin-bottom:10px;
    }
`;

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;

    p{
        font-size: 14px;
        font-weight:600;
    }

    input{
        width: 90%;
        height: 35px;
        padding-left: 5px;
        border-radius: 5px;
        border: 1px solid lightgray;
        margin-top:5px;

        &:hover{
            border:1px solid blue;
        }
    }

`;

const LoginButton = styled.button`
    width: 70%;
    height: 35px;
    background-color: #d874fc;
    border: none;
    outline:none;
    border-radius: 5px;
    margin-top: 30px;
    color:white;
    cursor:pointer;
    transition: all ease 0.5s;

    &:hover{
        background-color: black;
        color: #d874fc;
    }
`;



export default AddProduct