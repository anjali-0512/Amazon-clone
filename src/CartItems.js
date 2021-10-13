import React from 'react';
import styled from 'styled-components';
import CartItem from './CartItem';

function CartItems({cartItems}){
    return(
        <Container>
            <Title>Shopping Cart</Title>
            <hr />
            <ItemsContainer>{

                  cartItems.map((item)=>(
                    <CartItem  
                       id = {item.id}
                       item={item.product}
                    
                    />
                  ))
                 
                
                }
            

            </ItemsContainer>
            

        </Container>
    )
}

export default CartItems;

const Container = styled.div`
     background-color: white;
     padding: 20px;
     width: 200px;
     height: 400px;
     flex: 0.8;
     margin-right: 14px;
`

const Title = styled.h1``

const ItemsContainer = styled.div``
