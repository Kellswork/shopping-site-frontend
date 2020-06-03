import styled from 'styled-components'
import {
  border,
  radius,
  typeScale,
  headerFont,
  primaryBlue,
  neutrals,
} from '../../utils'

export const SecondaryButton = styled.button`
  width: 90.09px;
  height: 40px;
  background: transparent;
  border: ${border(primaryBlue[6])[3]};
  box-sizing: border-box;
  border-radius: 4px;
  color: ${neutrals.darkgrey300};
`

export const FormButton = styled.button`
  padding: 0;
  width: 100%;
  height: 2.75rem;
  padding: 0.75rem;
  border: ${border(primaryBlue[7])[1]};
  border-radius: ${radius.sm};
  font-family: ${headerFont};
  font-size: ${typeScale.para};
  background-color: ${primaryBlue[7]};
  color: ${neutrals.lightgrey100};
  box-shadow: 0px 4px 6px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.2s linear, color 0.2s linear;
`
