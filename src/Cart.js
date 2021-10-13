import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({cartItems}){

    const getCount=()=>{
        let count=0;
        //Loop thorugh all cart items
        cartItems.forEach((item)=>{
             //add the quantity of the cart item to total
            count+= item.product.quantity;
        })
            
        return count;
    }
    //Passing the function from one component to another
    return(
        <Container>
            <CartItems cartItems={cartItems}/>
            <CartTotal getCount={getCount} cartItems={cartItems}/> 
        </Container>
    )

}

export default Cart;

const Container = styled.div`
  display: flex;
  padding:14px 18px 0 18px;
  height:100vh;
  background-color: #FAF9F6;
  align-items: flex-start;

`