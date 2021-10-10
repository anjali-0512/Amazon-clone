import React from 'react';
import styled from 'styled-components';

function Product(){
    return (
        <Container>
            <Title>
                 ffefef
            </Title>
            <Price>
                grgre
            </Price>
            <Rating>
                gregrg

            </Rating>
            <Image src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-13-family-select-2021?wid=940&hei=1112&fmt=jpeg&qlt=80&.v=1629842667000" />
            <ActionSection>
               <AddToCartButton>
                  Add to Cart

               </AddToCartButton>

            </ActionSection>
            
        </Container>
    )
}

export default Product;

const Container = styled.div`
 background-color: white;
 z-index: 100;
 flex: 1;
 padding: 20px;
 margin: 10px;

 max-height: 400px;
 display: flex;
 flex-direction: column;



`
const Title = styled.span``
const Price = styled.span`
  font-weight: 500;
  margin-top: 3px;


`
const Rating = styled.div``
const Image= styled.img`
 max-height: 200px;
 object-fit: contain;


`

const ActionSection =styled.div`

   margin-top: 12px;
   display: grid;
   place-items: center;


`
const AddToCartButton = styled.button`
  width: 100px;
  height: 30px;
  background-color: #f0c14b;
  border: 2px solid #a88734;
  border-radius: 2px;

`
