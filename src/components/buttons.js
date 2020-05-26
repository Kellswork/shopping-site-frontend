import styled from 'styled-components'
import {
  spacingUnit,
  border,
  typeScale,
  headerFont,
  primaryBlue,
} from '../utils'

export const FormButton = styled.button`
  padding: ${(spacingUnit[3], spacingUnit[5])},
  border-radius: ${border.radius},
  font-family: ${headerFont},
  font-size: ${typeScale.para},
  background-color: ${primaryBlue[7]}
  transition: background-color 0.2s linear, color 0.2s linear;
`
