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

const Container = styled.div``

const ImageContainer = styled.div`` 
const CartItemInfo = styled.div``
const CartItemInfoTop = styled.div``
const CartItemInfoBottom = styled.div``
const CartItemPrice = styled.div``
const CartItemQuantityContainer = styled.div``
const CartItemDeleteContainer = styled.div``