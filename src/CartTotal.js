import React from 'react';
import styled from 'styled-components';

function CartTotal({cartItems , getCount}){

    const getTotalPrice=()=>{
        let count=0;
        
        //Loop thorugh all cart items
        cartItems.forEach((item)=>{
             //add the quantity of the cart item to total
            count+= (item.product.quantity * item.product.price);
            
        })

        
            
        return count;
    }

    return(
        <Container>
            <CartSubtotalContainer>
                <h2>Subtotal {getCount()} items &#8377;{getTotalPrice()}</h2>

            </CartSubtotalContainer>

            <ActionSection>
                <ProceedtoCheckout>
                    Proceed To Checkout

                </ProceedtoCheckout>
            </ActionSection>

            

        </Container>
    )
}

export default CartTotal;

const Container = styled.div`
  background-color: white;
  flex: 0.2;
  height: 300px;
  padding: 20px;


`

const CartSubtotalContainer = styled.div``

const ActionSection = styled.div`
    margin-top: 80px;
    display: grid;
    place-items: center;

`

const ProceedtoCheckout = styled.button`

    width: 100px;
    height: 50px;
    background-color: #f0c14b;
    border: 2px solid #a88734;
    border-radius: 2px;
    cursor: pointer;
    :hover{
        background: #dd347;
    }

`

