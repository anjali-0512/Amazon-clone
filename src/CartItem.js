import React from 'react';
import styled from 'styled-components';

function CartItem () {
    return(
        <Container>
            <ImageContainer>
                <img src="https://m.media-amazon.com/images/I/71tpxtLD0aL._AC_UY436_FMwebp_QL65_.jpg" />

            </ImageContainer>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>IPHONE</h2>

                </CartItemInfoTop>

                <CartItemInfoBottom>
                    <CartItemQuantityContainer>4</CartItemQuantityContainer>
                    <CartItemDeleteContainer>Delete</CartItemDeleteContainer>

                </CartItemInfoBottom>

            </CartItemInfo>
            <CartItemPrice>
                 145555
            </CartItemPrice>

        </Container>
            
        
    )
}

export default CartItem;

const Container = styled.div`
 padding-top: 12px;
 padding-bottom: 12px;
 display: flex;

`

const ImageContainer = styled.div`
 height: 180px;
 width: 180px;
 flex-shrink: 0;
 flex-grow: 0;
 margin-right: 16px;

 img{
     object-fit: contain;
     height: 100%;
     width: 100%;
 }

` 
const CartItemInfo = styled.div`
    color: #007185;
    h2{
        font-size: 18px;
    }


`
const CartItemInfoTop = styled.div``
const CartItemInfoBottom = styled.div`
    display: flex;
    margin-top: 4px;

`
const CartItemPrice = styled.div`
    font-size: 18px;
    font-weight: 700;
    margin-left: 16px;

`
const CartItemQuantityContainer = styled.div``
const CartItemDeleteContainer = styled.div`
 color: #007185;
 margin-left: 16px;
 cursor: pointer;

`