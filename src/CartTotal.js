import React from 'react';
import styled from 'styled-components';
import NumberFormat from 'react-number-format';


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
                <Subtotal>Subtotal ({getCount()} items): 
                <NumberFormat thousandSeparator={true} displayType={'text'} thousandsGroupStyle="lakh" prefix={'₹'} value={getTotalPrice()} />
                </Subtotal>

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
    margin-top: 20px;
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
const Subtotal = styled.h2`
   font-size: 25px;
   font-weight: 700;



`
