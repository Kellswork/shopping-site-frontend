import styled from 'styled-components'
import { typeScale, textFont, neutrals, border } from '../utils'

export const Input = styled.input`
  width: 394px;
  height: 40px;
  background: ${neutrals.darkgrey100};
  display: inline-block;
  border: ${border[1](neutrals.darkgrey100)};
  box-sizing: border-box;
  border-radius: ${border.radius};
`
export const Label = styled.label`
color: 
font-family: ${textFont};
font-size: ${typeScale.para}
`
