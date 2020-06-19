import styled from 'styled-components'

import {
  headerFont,
  fontWeight,
  neutrals,
  spacingUnit,
  typeScale,
  radius,
} from '../../../utils'

export const Div = styled.div`
  width: 100%;
  max-width: 1400px;
  height: 144px;
  border: 1px solid ${neutrals.lightgrey200};
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin-bottom: ${spacingUnit[5]};
  background: ${neutrals.lightgrey100};
  border-radius: ${radius.xs};
`
export const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: ${spacingUnit[1]} 0rem;
  box-sizing: border-box;
  .logo {
    width: 10%;
    text-align: center;
    cursor: pointer;
  }
  .search {
    width: 30%;
    svg {
      position: absolute;
      right: 38%;
      cursor: pointer;
    }
  }
`

export const IconDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-right: ${spacingUnit[1]};
  box-sizing: border-box;
  width: 14%;
`
export const LineDiv = styled.div`
  width: 100%;
  height: 1px;
  background: ${neutrals.lightgrey200};
`
export const LinksDiv = styled.div`
  font-family: ${headerFont};
  font-weight: ${fontWeight.bold};
  padding-top: ${spacingUnit[3]};
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
  li {
    cursor: pointer;
  }
`
