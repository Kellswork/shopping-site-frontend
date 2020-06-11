import styled, { css } from 'styled-components'
import { Field } from 'formik'

import {
  typeScale,
  neutrals,
  radius,
  primaryBlue,
  headerFont,
  spacingUnit,
} from '../../utils'

export const SearchInput = styled.input`
  width: 70%;
  padding: 6px 2px;
  box-sizing: border-box;
  border-radius: 0px;
  border: 1px solid #cbd2d9;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`

export const Input = styled(Field)`
  width: ${(props) => props.width || '100%'};
  height: 40px;
  background: ${neutrals.lightgrey100};
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid ${neutrals.lightgrey100};
  box-shadow: inset 0 1px 2px ${neutrals.lightgrey500}, 0 -1px 1px #fff,
    0 1px 0 #fff;
  border-radius: ${radius.sm};
  padding-left: ${spacingUnit[1]};
  margin-top: ${spacingUnit[2]};
  display: inline-block;
  box-sizing: border-box;
  color: ${neutrals.darkgrey500};
  &:focus,
  &:active {
    border: 1px solid ${primaryBlue[4]};
  }
  ${({ error }) =>
    error &&
    css`
      border: 1px solid rgb(191, 49, 12);
      outline: none;

      &:focus,
      &:active {
        border: 1px solid rgb(191, 49, 12);
        outline: none;
      }

      /* Autocomplete styles in Chrome*/
      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus {
        border: 1px solid rgb(191, 49, 12);
      }
    `}
`
export const Label = styled.label`
  font-size: ${typeScale.para};
  font-family: ${headerFont};
  display: block;
  color: ${neutrals.darkgrey500};
`
export const InputDiv = styled.div`
  margin-bottom: ${spacingUnit[4]};
`
