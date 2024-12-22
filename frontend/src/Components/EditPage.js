import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

const EditPage = () => {

    const[{},dispatch] = useStateValue('');
        /*Хранение переменных */
        const [lastName, setLastName] = useState('')
        const [phone, setPhone] = useState('');
        const [city, setCity] = useState('');

        // setState('Ижевск')
        // console.log(name);
        const navigate =  useNavigate();

        const deliver = (e) => {
            e.preventDefault()

            dispatch({
                type:'SET_EDITPAGE',
                item:{
                    lastName,
                    phone,
                    city,
                },
            })

            navigate('/profile')
        }
    
  return (
    <Container>
        <Navbar/>

        <Main>
            <FormContainer>

            <InputContainer>
                <p>Фамилия</p>
                <input type="text" 
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
                />
             </InputContainer>
            <InputContainer>
                <p>Мобильный Телефон</p>
                <input type="text" 
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                />
             </InputContainer>
            <InputContainer>
                <p>Город</p>
                <input type="text" 
                onChange={(e) => setCity(e.target.value)}
                value={city}
                />
             </InputContainer>

             <button onClick={deliver}>Доставка по адресу</button>
            


            </FormContainer>
        </Main>
    </Container>
  )
}

const Container = styled.div`
    width: 100%;
    max-width: 1800px;
    min-height: 100vh;
    margin: auto;
    background-color: aliceblue;
    

`;
const FormContainer = styled.div`
    border: 1px solid lightgray;
    width: 55%;
    min-width: 300px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    align-text: center;
    align-items: center;
    justify-content: center;
    padding: 15px;
    
    
    background-color: #fff;
    margin: auto;

    margin-top: 20px;
    

    button{
        width: 65%;
        height: 35px;
        margin-top: 20px;
        background-color: #febd69;
        cursor:pointer;
        transition: all ease 0.5s;
        border: none;
        outline: none;
        font-weight:600;
    
        border-radius: 5px;
        
        &:hover{
        background-color: black;
        color: #febd69;
        
        }
      }
    
`;

const Main = styled.div`
padding: 15px`;

const InputContainer = styled.div`
    width: 100%;
    padding: 10px;
    padding-left: 8%;

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


export default EditPage