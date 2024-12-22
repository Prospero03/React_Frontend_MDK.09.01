import React, { useState } from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';


function Profile ()  {

  const navigate = useNavigate(); //навигация
  const [isEditing, setIsEditing] = useState(false);

  const [{user}] = useStateValue(); //данные регистрации


  const [phone, setPhone] = useState("---");
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState('---');
  const [fullName, setFullName] = useState(user.fullName);
  

  return (
    <Container>
        <Navbar/>
          <Main>
            <FormContainer>
            
            <h1>Личный кабинет</h1>

            <form 
                    //Функция предотвращения по умолчанию
                    onSubmit={(e) =>{
                    e.preventDefault();
                    setIsEditing(!isEditing);
              }}>   
                    <Data>
                              

                              <TextData>
                              Имя: {""}
                              {isEditing ? (
                                  <input
                                    value={fullName}
                                    onChange={(e)=>{
                                      setFullName(e.target.value);
                                    }}
                                  />

                                ):(
                                  <b>{fullName}</b>
                                ) 
                              }    
                              </TextData> 
                              
                              <TextData>
                              Email: {""}
                              {isEditing ? (
                                  <input
                                    value={email}
                                    onChange={(e)=>{
                                      setEmail(e.target.value);
                                    }}
                                  />

                                ):(
                                  <b>{email}</b>
                                ) 
                              }    
                              </TextData> 

                              <TextData>
                              Телефон: {""}
                              {isEditing ? (
                                  <input
                                    value={phone}
                                    onChange={(e)=>{
                                      setPhone(e.target.value);
                                    }}
                                  />

                                ):(
                                  <b>{phone}</b>
                                ) 
                              }    
                              </TextData> 

                              <TextData>
                              Город: {""}
                              {isEditing ? (
                                  <input
                                    value={city}
                                    onChange={(e)=>{
                                      setCity(e.target.value);
                                    }}
                                  />

                                ):(
                                  <b>{city}</b>
                                ) 
                              }    
                              </TextData> 
                    </Data>


                    <EditAccountButton>
                        <button type="submit">{isEditing ? "Сохранить" : "Редактирование"} Профиль</button>
                    </EditAccountButton>

            </form>
              
              
            
            </FormContainer>

          <EditAccountButton onClick={() => navigate('/')}>
            <button>Назад</button>
          </EditAccountButton>
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
padding: 15px`;

const FormContainer = styled.div`
    border: 1px solid lightgray;
    width: 55%;
    
    min-width: 300px;
    height: fit-content;
    display: flex;
    align-items: center;
    flex-direction: column;
    
    
    justify-content: center;
    padding: 15px;
    background-color: #fff;
    margin: auto;

    margin-top: 20px;
    padding-left:30px;
    padding-right:30px;
    position relative;

    form{
      width: 100%;
      
    }

    @media only screen and (max-width: 400px){
      min-width: 290px;
      padding: 15px;
    }

    

`;
const Data =styled.div`
      width: 100%;
      
      display:flex;
      flex-direction: column;
      justify-content: start;
      align-items: start;
      align-text: start;
      
      
      
`;

const TextData = styled.div`
      padding-top: 10px;  
      padding-bottom: 10px;
      width: 100%;
      display:flex;
      align-items: center;
      justify-content: start;
      font-weight: 600;

      b{  
          margin-left: 10px;
          color: #8f28b5;
        }
      
      
      @media only screen and (max-width: 767px){
        margin-left:0px;
        width: 100%;
        display:flex;
        align-items: center;
        justify-content: space-between
      }
      `;

const EditAccountButton = styled.div`
width: 100%;
display: flex;
justify-content: center;
align-items: center;
padding-top: 20px;

button{
    
    min-width: 300px;
    height: 35px;
    
    background-color: #d874fc;;
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
`;


export default Profile