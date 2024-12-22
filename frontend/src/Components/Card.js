import React from 'react';
import styled from 'styled-components';
import { useStateValue } from '../StateProvider';


/*function Card({basket, setBasket,image,title,price}) {
    Добавление Товара в Корзину 
    const addToBasket = () =>{
        setBasket([...basket, { image,title,price }])
    };
*/

function Card({id, image, title, price}){
    const [{basket},dispatch] = useStateValue();
    console.log('basket>>>>',basket);
        const addToBasket = (e) => {
                e.preventDefault();

                dispatch({
                    type:"ADD_TO_BASKET",
                    item: {
                        id,
                        title,
                        price,
                        image,
                    },
                });
        };
           
return (
    <Container>
        <Image>
            <img 
            src={image} 
            alt=""
             />
        </Image>

        <Description>
            <h5>
                {title}
            </h5>
            <p>{price} руб.</p>

            

        </Description>
        <ButtonAdd>
            <button onClick={addToBasket}>Добавить в корзину</button>
        </ButtonAdd>
    </Container>
  )
}



const Container = styled.div`
width:100%;
height:100%;


display:flex;
flex-direction:column;
background-color:#fff;
z-index:10;


`;

const Image = styled.div`
    width: 100%;
    display: flex;
    
    align-items:center;
    justify-content:center;
    flex-direction:column;
    margin-top:20px;
    flex:0.5;
    img{
        width:160px;
        max-height:200px;
    }
`;

const Description = styled.div`
    
    width:90%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    flex:0.3;

    h5{
        flex:0.7;
        
        font-size:16px;
        font-weight:600;
    }

    p{  
        flex:0.3;
        font-weight:600;
    }

    

`;
const ButtonAdd = styled.div`
    width:90%;
    margin:auto;
    display: flex;
    flex-direction: column;
    justify-content:end;
    padding-bottom: 20px;
    flex:0.2;
    button{
        width:100%;
        height:33px;
        background-color:black;
        color: #fff;
        border:none;
        border-radius:10px;
        cursor:pointer;
        transition: all ease 0.5s;

        &:hover{
            background-color:#d874fc;
            color: #fff;
        }

}
    `;

export default Card
