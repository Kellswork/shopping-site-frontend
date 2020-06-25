import styled from 'styled-components'
import { neutrals, spacingUnit, typeScale, headerFont } from '../../utils'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid ${neutrals.lightgrey100}; */
  /* background-color: ${neutrals.white}; */
  margin: 0 auto;
  margin-top: ${spacingUnit[1]};
`

export const EmailVerificationCard = styled.div`
  padding-top: 5%;
  height: ${(props) => props.height || '55%'};
  text-align: center;
  font-family: ${headerFont};
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  h6 {
    font-size: ${typeScale.H6};
    color: ${neutrals.darkgrey400};
    font-weight: bold;
  }
  p {
    font-size: ${typeScale.para};
    color: ${neutrals.darkgrey200};
    line-height: 1.5;
  }
`
