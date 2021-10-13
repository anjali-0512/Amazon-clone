import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}){
    return(
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal />
        </Container>
    )

}

export default Cart;

const Container = styled.div`
  display: flex;
  padding:14px 18px 0 18px;
  height:100vh;
  background-color: #FAF9F6;

`