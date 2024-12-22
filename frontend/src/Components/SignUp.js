import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useStateValue } from '../StateProvider';
import axios from "../axios";

function SignUp() {
  


  const[{},dispatch] = useStateValue('');

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signup = (e) => {
    e.preventDefault();

      axios
        .post("/auth/signup", { email, password, fullName })
        .then((res) => alert(res.data.message))
        .catch((err) => console.warn(err));

      dispatch({
          type:'SET_USER',
          item:{
              fullName,    
              email,
              password,
          },
      })

      navigate("/login");
  
  };
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./logo.png" alt="" />
      </Logo>
      <FormContainer>
        <h3>Регистрация</h3>
        <InputContainer>
          <p>Имя</p>
          <input
            type="text"
            placeholder="John Smith"
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
          />
        </InputContainer>
        <InputContainer>
          <p>Email</p>
          <input
            type="email"
            placeholder="example@example.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </InputContainer>
        <InputContainer>
          <p>Пароль</p>
          <input
            type="password"
            placeholder="********"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </InputContainer>

        <SignButton onClick={signup}>Создать Новый Аккаунт</SignButton>
      </FormContainer>

      <LoginButton onClick={() => navigate("/login")}>
        Вернуться к Авторизации
      </LoginButton>
    </Container>
  );
}
const Container = styled.div`
    
    width: 40%;
    min-width: 400px;
    min-height:100vh;
    
    margin: auto;
    display:flex;
    flex-direction:column;
    align-items: center;
    
    
    border:none;

    @media only screen and (max-width: 400px){
      min-width: 375px;
    }

  
`;
const Logo = styled.div`
    width:120px;
    margin-bottom:20px;
    img{
        width: 100%;
    }
`;
const FormContainer = styled.form`
    border:1px solid lightgray;
    width:55%;
    height: 400px;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
    padding: 15px;

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

const SignButton = styled.button`
    width: 100%;
    height: 35px;
    
    border: none;
    outline:none;
    border-radius: 5px;
    margin-top: 20px;
    
    cursor:pointer;

    &:hover{
        background-color: #dfdfdf;
    }
`;

const LoginButton = styled.button`
    width: 55%;
    height: 35px;
    font-size: 12px;
    margin-top: 20px;
    color:white;
    background-color:#d874fc;
    border:none;
    outline:none;
    transition: ease all 1s;
    border-radius: 5px;
    cursor:pointer;
    

    &:hover{
        background-color: black;
        color: #d874fc;
        
    }
`;

export default SignUp;
