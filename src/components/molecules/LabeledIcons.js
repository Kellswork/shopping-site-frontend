import React from 'react'
import styled from 'styled-components'
import { IconHeart, ShoppingCart, User, Logo } from '../atoms'
import { headerFont, typeScale, spacingUnit } from '../../utils'

const Div = styled.div`
  font-family: ${headerFont};
  display: flex;
  justify-content: space-around;
  align-items: center;
  p {
    font-size: ${typeScale.copyRightText};
    margin-left: ${spacingUnit[0]};
    letter-spacing: 0.5px;
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
