import styled from 'styled-components'
import { border, typeScale, headerFont, primaryBlue, neutrals } from '../utils'

export const FormButton = styled.button`
  padding: 0;
  width: 24.6rem;
  height: 2.75rem;
  border: ${border(primaryBlue[7])[1]};
  border-radius: ${border().radius};
  font-family: ${headerFont};
  font-size: ${typeScale.para};
  background-color: ${primaryBlue[7]};
  color: ${neutrals.lightgrey100};
  box-shadow: 0px 4px 6px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.2s linear, color 0.2s linear;
`
