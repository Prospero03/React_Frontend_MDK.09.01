import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "../axios";
import { useStateValue } from "../StateProvider";


function Login() {


  const navigate = useNavigate();


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [{}, dispatch] = useStateValue();

  const login = (e) => {
    e.preventDefault();

    axios
      .post("/auth/login", { email, password })
      .then((res) => {
        if (!res.data.error) {

          dispatch({
            type: "SET_USER",
            user: res.data,
          });

          localStorage.setItem("user", JSON.stringify(res.data));

          navigate("/");
        } else if (res.data.error) {
          alert(res.data.error);
        }
      })
      .catch((err) => console.warn(err));

      navigate("/");
  };
  return (
    <Container>
      <Logo onClick={() => navigate("/")}>
        <img src="./logo.png" alt="" />
      </Logo>

      <FormContainer>
        <h3>Логин</h3>

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

        <LoginButton onClick={login}>Войти</LoginButton>

        
      </FormContainer>
      <SignUpButton onClick={() => navigate("/signup")}>
        Зарегистроваться
      </SignUpButton>
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
        color: #d874fc;
        background-color: black;
    }
`;


const SignUpButton = styled.button`
    width: 55%;
    height: 35px;
    font-size: 12px;
    margin-top: 20px;
    
    
    border:none;
    outline:none;
    transition: ease all 1s;
    border-radius: 5px;
    cursor:pointer;

    &:hover{
        background-color: #dfdfdf;
        
    }
`;


export default Login;
