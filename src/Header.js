import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search'; //Check this
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header (){
    return (
  <Container>
      <HeaderLogo>
          <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbEGoAAOT2e9grED4G3hqjiM1afks8nvii7PZGDe0dJeKnmrONwswHeD_N1gbDGCHNi8&usqp=CAU"} />

      </HeaderLogo>
      <HeaderAddressOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your address</OptionLineTwo>
      </HeaderAddressOption>

      <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchContainer>
              <SearchIcon />
          </HeaderSearchContainer>
      </HeaderSearch>

      <HeaderNavItems>
          <HeaderOption>
              <OptionLineOne>Hello,Anjali</OptionLineOne>
              <OptionLineTwo>Accounts & listings</OptionLineTwo>
          </HeaderOption>

          <HeaderOption>
              <OptionLineOne>Returns</OptionLineOne>
              <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>

          <HeaderOptionCart>
              <ShoppingBasketIcon />
              <CartCount>4</CartCount>
          </HeaderOptionCart>
      </HeaderNavItems>
  </Container>
    )}

export default Header;

const Container = styled.div`
    height:60px;
    background-color: #0F1111;
    color:white;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const HeaderLogo = styled.div`
 img{
     width: 100px;
     margin-left: 11px;
 }
  
`

const HeaderAddressOption = styled.div``

const OptionLineOne = styled.div``

const OptionLineTwo=styled.div`
 font-weight: 700;
`

const HeaderSearch = styled.div`
  display: flex;

`

const HeaderSearchInput = styled.input``

const HeaderSearchContainer = styled.div``

const HeaderNavItems = styled.div`
     display: flex;
`

const HeaderOption = styled.div`
       //Top right Bottom left
       padding: 10px 9px 10px 9px;
 `

const HeaderOptionCart = styled.div`` 


const CartCount = styled.div``