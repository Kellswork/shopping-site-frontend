import React from 'react'
import styled from 'styled-components'
import { Footer } from '../organisms'
import { Container } from './~styledPages'
import headerImage from '../../asset/header-card.png'
import { Div } from '../organisms/styled'
import {
  headerFont,
  fontWeight,
  neutrals,
  spacingUnit,
  typeScale,
  textFont,
  radius,
} from '../../utils'

export const BottomNav = styled.div`
  width: 100%;
  max-width: 1300px;
  height: 106px;
  border: 1px solid ${neutrals.lightgrey200};
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: ${spacingUnit[5]};
  background: ${neutrals.lightgrey100};
  border-radius: ${radius.xs};
`

export const TopNav = styled.div`
  display: flex;
  width: 100%;
  max-width: 900px;
  justify-content: space-between;
  align-items: center;
  font-size: ${typeScale.copyRightText};
  font-family: ${textFont};
  padding: 20px;
  color: #373737b0;
  .left-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 27%;
  }
  .right-content {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 27%;
  }
`

const TinyCircle = () => (
  <div
    style={{
      width: '3px',
      height: '3px',
      borderRadius: '50%',
      backgroundColor: '#2d2b2b82',
    }}
  ></div>
)

export const LandingPage = () => (
  <Container>
    <TopNav>
      <div className="left-content">
        <p>+2348090103333</p>
        <TinyCircle />
        <p>lystergems@gmail.com</p>
      </div>
      <div className="right-content">
        <p>ACCOUNT</p>
        <TinyCircle />
        <p>WISHLIST</p>
        <TinyCircle />
        <p>LOGIN</p>
        <TinyCircle />
        <p>SIGNUP</p>
      </div>
    </TopNav>
    <BottomNav></BottomNav>
    <Footer />
  </Container>
)
