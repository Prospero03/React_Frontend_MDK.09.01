import axios from '../axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Card from './Card';
import Navbar from './Navbar';
import { useNavigate } from 'react-router-dom';


/*
      <Banner>
        <img src="./banner.jpg" alt="" />
        <img src="./mobile-banner.jpg" alt="" />
      </Banner>
*/

/* function Home({basket, setBasket}) {*/
function Home() {
  const [products,setProducts] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchdata = async () => {
      const data = await axios.get('/products/get');
      console.log("products >>>> ", data);

      setProducts(data);
    };
    fetchdata();
  }, []);

  return (
    <Container>
      <Navbar 
      
      /*basket={basket}*//>
    
      <Main>

          {products && 
            products?.data.map(
              (product) => ( <Card 
              /*basket={basket} 
              setBasket={setBasket} 
              */
              id ={product._id}
              image={product.imageURL}
              price={product.price}
              title={product.title} 
              />
            ))}
 
      </Main>
      <AddProductButton >
            <button onClick={() => navigate("/addproduct")}>Добавить Товар</button>
      </AddProductButton>
    </Container>
  );
}
const Container = styled.div`
  width:100%;
  max-width: 1800px;
  margin: auto;
  min-height: 100vh;
  background-color: aliceblue;
  
`;

/*const Banner = styled.div`
  
  width:100%;
  img{
    
    width:100%;
    -webkit-mask-image: linear-gradient(
      to bottom,
      rgba(0,0,0,2),
      rgba(0,0,0,2),
      rgba(0,0,0,2),
      rgba(0,0,0,1),
      rgba(0,0,0,0.85),
      rgba(0,0,0,0.75),
      rgba(0,0,0,0.55),
      rgba(0,0,0,0)
      );

      &:nth-child(2){
        display:none;
      }

      @media only screen and (max-width:767px){
        &:nth-child(1){
          display:none;
        }
        &:nth-child(2){
          display:block;
          -webkit-mask-image: none;
        }
      }
  }
`;
*/
const Main = styled.div`
    margin-top: 35px;
    
    display:grid;
    justify-content:center;
    place-items:center;
    width:100%;
    
    grid-auto-rows: 420px;
    grid-template-columns: repeat(4, 280px);
    grid-gap: 20px;

    @media only screen and (max-width: 767px){
      margin-top: 0px;
      grid-template-columns: repeat(2, 50%);
      grid-gap:0 ;
      padding-top:0%;
      
    }
    @media only screen and (min-width: 767px)and (max-width: 1200px){
      grid-template-columns: repeat(3, 20%);
      
      
    }
`;

const AddProductButton = styled.div`
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 50px;

      button{
          width: 25%;
          min-width: 300px;
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
          color: #d874fc
        }
      }
`;

export default Home;

      /*
          <Card 
            id ={1}
            image={"./card.png"}
            price={2500}
            title={"title"} 
          />
           
          <Card 
            id ={2}
            image={"./card.png"}
            price={2500}
            title={"title"} 
          />
           
          <Card 
            id ={3}
            image={"./card.png"}
            price={2500}
            title={"title"} 
          />
           
          <Card 
            id ={4}
            image={"./card.png"}
            price={2500}
            title={"title"} 
          />

    */