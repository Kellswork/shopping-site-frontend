import React from 'react'
import styled from 'styled-components'
import { Logo } from '../atoms'
import {
  LabeledCartIcon,
  LabeledHeartIcon,
  LabeledUserIcon,
} from '../molecules/LabeledIcons'
import {
  headerFont,
  fontWeight,
  neutrals,
  spacingUnit,
  typeScale,
} from '../../utils'
import { InputButton } from '../molecules'

const Div = styled.div`
  width: 100%;
  max-width: 1200px;
  height: 128px;
  border: 1px solid ${neutrals.lightgrey200};
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: ${spacingUnit[5]};
  background: ${neutrals.white};
`
const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: ${spacingUnit[0]} 0rem;
  box-sizing: border-box;
  .logo {
    width: 10%;
    text-align: center;
  }
`

const IconDiv = styled.div`
  display: flex;
  width: 26%;
  justify-content: space-evenly;
  align-items: center;
  margin-right: ${spacingUnit[1]};
  box-sizing: border-box;
`
const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background: #e4e7eb;
`
const LinksDiv = styled.div`
  font-family: ${headerFont};
  font-weight: ${fontWeight.bold};
  padding: ${spacingUnit[1]} 0rem;
  width: 50%;
  width: 100%;
  max-width: 540px;
  margin: 0 auto;
  ul {
    font-size: ${typeScale.text};
    letter-spacing: 0.5px;
    display: flex;
    justify-content: space-around;
    color: ${neutrals.darkgrey200};
  }
`

export const Nav = () => (
  <Div>
    <TopSection>
      <div className="logo">
        <Logo />
      </div>
      <InputButton text="Search" />
      <IconDiv>
        <LabeledHeartIcon />
        <LabeledCartIcon />
        <LabeledUserIcon />
      </IconDiv>
    </TopSection>
    <LineDiv />
    <LinksDiv>
      <ul>
        <li>Wedding Rings</li>
        <li>Necklaces</li>
        <li>Knuckle Rings</li>
        <li>Glasses</li>
      </ul>
    </LinksDiv>
    <LineDiv />
  </Div>
)
