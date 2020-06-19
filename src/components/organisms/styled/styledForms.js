import styled from 'styled-components'
import {
  typeScale,
  headerFont,
  fontWeight,
  neutrals,
  errorCol,
  white,
  radius,
  spacingUnit,
  primaryBlue,
} from '../../../utils'

export const CardContainer = styled.div`
  margin-top: ${spacingUnit[5]};
  margin-bottom: ${spacingUnit[5]};
  background: ${neutrals.white};
  width: 100%;
  max-width: 790px;
  height: 569px;
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: ${radius.sm};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  h4 {
    font-size: ${typeScale.H4};
    font-family: ${headerFont};
    font-weight: ${fontWeight.bold};
    color: ${neutrals.darkgrey300};
    margin: 0 auto;
    padding-top: ${spacingUnit[6]};
  }
`

export const CardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: ${spacingUnit[2.5]};
`

export const Form = styled.form`
  max-width: 394px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

export const FloatDiv = styled.div`
  display: flex;
`

export const RectDiv = styled.div`
  width: 2.97px;
  height: 272px;
  background: ${primaryBlue[5]};
  margin-bottom: ${spacingUnit[2]};
`
export const InputDiv = styled.div`
  margin-bottom: ${spacingUnit[4]};
`

export const LoginDiv = styled.div`
  box-sizing: border-box;
  padding-bottom: ${spacingUnit[8]};
  text-align: center;

  p {
    padding-bottom: ${spacingUnit[4]};
    font-family: ${headerFont};
    font-weight: bold;
    font-size: ${typeScale.para};
    color: ${neutrals.darkgrey300};
  }
  button {
    font-size: ${typeScale.helperText};
  }
  span {
    padding-left: ${spacingUnit[0]};
  }
`

export const Para = styled.p`
  padding: 4px;
  box-sizing: border-box;
  background: ${errorCol.error100};
  border-radius: 2px;
  color: ${errorCol.error800};
  margin-top: 0px;
  font-family: ${headerFont};
  font-size: ${typeScale.helperText};
`

export const Loading = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  align-items: center;
`
