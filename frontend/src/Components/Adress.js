import React, {useState} from 'react'
import styled from 'styled-components'
import Navbar from './Navbar';
import { useStateValue } from '../StateProvider';
import { useNavigate } from 'react-router-dom';

function Adress  ()  {


        const[{},dispatch] = useStateValue('');
        /*Хранение переменных */
        const [name, setName] = useState('')
        const [phone, setPhone] = useState('');
        const [email, setEmail] = useState('');
        const [city, setCity] = useState('');
        const [street,setStreet] = useState('');
        const [apart, setApart] = useState('');

        // setState('Ижевск')
        // console.log(name);

        const navigate =  useNavigate();

        const deliver = (e) => {
            e.preventDefault()

            dispatch({
                type:'SET_ADDRESS',
                item:{
                    name,
                    phone,
                    email,
                    city,
                    street,
                    apart,
                },
            })

            navigate('/payment')
        }

  return (
    <Container>
        <Navbar/>

            

        <Main>
            <FormContainer>

            <InputContainer>
                <p>Имя</p>
                
                <input type="text" placeholder='Дмитрий' 
                onChange={(e) => setName(e.target.value)}
                value={name}

                />
             </InputContainer>
            <InputContainer>
                <p>Мобильный Телефон</p>
                <input type="text" placeholder='+7(950)-000-00-00'
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
                />
             </InputContainer>
            <InputContainer>
                <p>Email</p>
                <input type="email" placeholder='exam_project@exampe.com'
                onChange={(e)=> setEmail(e.target.value)}
                value={email}
                
                />
             </InputContainer>
            <InputContainer>
                <p>Город</p>
                <input type="text"
                onChange ={(e) => setCity(e.target.value)}
                value = {city}
                
                />
             </InputContainer>
            <InputContainer>
                <p>Улица</p>
                <input type="text"
                onChange = {(e) => setStreet(e.target.value)}
                value = {street}
                
                />
             </InputContainer>
            <InputContainer>
                <p>Дом/Квартира</p>
                <input type="text"
                onChange = {(e)=> setApart (e.target.value)}
                value= {apart}
                
                />
             </InputContainer>

             <button onClick={deliver}>Доставка по адресу</button>
            


            </FormContainer>
        </Main>
    </Container>
  )
}
//height: fit-content;
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

export default Adress