import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

/*function Navbar({ basket }) {*/
function Navbar() {
    const [{ basket}] = useStateValue();
  const navigate = useNavigate();

  return (
    <Container>
        <Inner>
            <Logo onClick={() => navigate('/')} >
                <img src="./logo_white.svg" alt="" />
            </Logo>

            <RightContainer>

                <NavButtonLog>
                    <p onClick={() => navigate('/login')}>Войти</p>
                    <p onClick={() => navigate('/signup')}>Регистрация</p>
                </NavButtonLog>

                

                <NavButton onClick={() => navigate('/profile')}>
                        <img className="profile" src="./profile.png" alt="" />
                </NavButton>
                
                <BasketButton onClick={() => navigate('/checkout')}>
                    <img src="./basket.png" alt="" />
                    <p>{basket?.length}</p>
                    
                </BasketButton>
            </RightContainer>
        </Inner>
        
    </Container>
  )
}
/*<p>{basket.length} в BasketButton</p>*/

const Container = styled.div`
    width:100%;
    height:70px;
    background-color: #131921;
    display:flex;
    align-items:center;
    position:relative;

    
`;

const Inner = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
        justify-content: space-between;
`;

const Logo = styled.div`
    margin-left:20px;
    
    cursor:pointer;

    img{
        
        width:40px;
        
    }
    
`;



const RightContainer = styled.div`
    display:flex;
    align-items:center;
    width: fit-content;
    justify-content:space-around;
    height: 100%;
    padding: 5px 20px;

    
`;

const NavButtonLog= styled.div`
    color: #fff;
    padding: 5px;
    margin-top: 10px;
    height: 80%;
    display:flex;
    flex-direction:row;
    justify-content: center;
    cursor:pointer;
    margin-right: 15px;


    p{

        font-size: 14px;
        font-weight:600;
        cursor:pointer;
        transition: all ease 0.5s;

        &:nth-child(1){
            margin-top: 0px;
            padding-right:20px;
            
        }
        &:nth-child(2){ 
            margin:0px;
            
        }

        &:hover{
            color: #d874fc;
        }
    }

    @media only screen and (max-width:400px){
        display:flex;
        flex-direction:column;
        justify-content: center;
        margin-rigth: 25px;

        p{

            font-size: 14px;
            font-weight:600;
            cursor:pointer;
            transition: all ease 0.5s;
    
            &:nth-child(1){
                margin-top: 0px;
                
            }
            &:nth-child(2){ 
                margin:0px;
                margin-bottom: 10px;
                
            }
    }

  
    
`;

const NavButton= styled.div`
    color: #fff;
    padding: 5px;
    margin-top: 10px;
    height: 80%;
    display:flex;
    flex-direction:column;
    justify-content: center;
    cursor:pointer;
    margin-right: 15px;

    
    .profile{
        width:30px;
        margin-bottom: 10px;
    }

    p{

        font-size: 14px;
        font-weight:600;
        cursor:pointer;
        transition: all ease 0.5s;

        &:nth-child(1){
            margin-top: 0px;
            
    }
`;

const BasketButton = styled.div`
    display:flex;
    align-items:center;
    cursor: pointer;
    height:90%;
    

    img{
        width:30px;
        margin-right:10px;
    }
    p{
        color:#fff;
        font-weight: 500;
    }
`;




export default Navbar