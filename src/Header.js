import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search'; //Check this
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import {
    Link
  } from "react-router-dom";

function Header (){
    return (
  <Container>
      <HeaderLogo>
          <Link to="/">
           <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjbEGoAAOT2e9grED4G3hqjiM1afks8nvii7PZGDe0dJeKnmrONwswHeD_N1gbDGCHNi8&usqp=CAU"} />
          </Link>

      </HeaderLogo>
           
      <HeaderAddressOption>

      <LocationOnIcon />

      <HeaderOption>
                <OptionLineOne>Hello</OptionLineOne>
                <OptionLineTwo>Select your address</OptionLineTwo>

      </HeaderOption>
          
          
          
      </HeaderAddressOption>

      <HeaderSearch>
          <HeaderSearchInput type="text" />
          <HeaderSearchIconContainer>
              <SearchIcon />
          </HeaderSearchIconContainer>
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
              <Link to="/cart">
                <ShoppingBasketIcon />
                <CartCount>4</CartCount>
              </Link>
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

const HeaderAddressOption = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
  
`

const OptionLineOne = styled.div``

const OptionLineTwo=styled.div`
 font-weight: 700;
`

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 40px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  :focus-within{
      box-shadow: 0 0 0 3px #F90;
  }

`

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 0;

  :focus{
      outline: none;
  }
`

const HeaderSearchIconContainer = styled.div`
   background-color: #febd69;
   width: 45px;
   color: black;
   display: flex;
   justify-content: center;
   align-items: center

`

const HeaderNavItems = styled.div`
     display: flex;
`

const HeaderOption = styled.div`
       //Top right Bottom left
       padding: 10px 9px 10px 9px;
       
 `

const HeaderOptionCart = styled.div`
  display: flex;

  a{
      display: flex;
      align-items: center;
      padding-right: 9px;
      color: white;
      text-decoration:none;
  }
  

` 


const CartCount = styled.div`
 padding: 4px;
 font-weight: 700;
 color: #f08804;

`


