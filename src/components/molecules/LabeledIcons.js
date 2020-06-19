import React from 'react'
import styled from 'styled-components'
import { IconHeart, ShoppingCart, User, Logo } from '../atoms'
import { headerFont, typeScale, spacingUnit, primaryBlue } from '../../utils'

const Div = styled.div`
  font-family: ${headerFont};
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  p {
    font-size: ${typeScale.copyRightText};
    margin-left: ${spacingUnit[0]};
    letter-spacing: 0.5px;
    padding-top: ${spacingUnit[0]};
    color: ${primaryBlue[10]};
  }
`
export const LabeledHeartIcon = () => (
  <Div>
    <IconHeart />
    <p>WISHLIST</p>
  </Div>
)

export const LabeledCartIcon = () => (
  <Div>
    <ShoppingCart />
    <p>CART</p>
  </Div>
)

export const LabeledUserIcon = () => (
  <Div>
    <User />
    <p>ACCOUNT</p>
  </Div>
)

export const LogoDiv = () => (
  <div className="logo">
    <Logo />
  </div>
)
