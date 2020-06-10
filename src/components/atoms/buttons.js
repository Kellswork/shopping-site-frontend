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
  cursor: pointer;
  border: ${border(primaryBlue[7])[1]};
  border-radius: ${radius.sm};
  font-family: ${headerFont};
  font-size: ${typeScale.helperText};
  background-color: ${primaryBlue[7]};
  color: ${neutrals.lightgrey100};
  box-shadow: 0px 4px 6px hsla(0, 0%, 0%, 0.2);
  transition: background-color 0.1s linear, color 0.1s linear;
  letter-spacing: 1px;

  &:active,
  &:focus {
    border: 1px solid #2251cc;
    box-sizing: border-box;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
  &:hover {
    background: #5e8aee;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
    border-radius: 4px;
    border: 1px solid #5e8aee;
  }
  &:disabled {
    cursor: pointer;
    background-color: ${neutrals.darkgrey100};
    box-shadow: none;
    color: ${neutrals.lightgrey100};
    border: ${border(neutrals.darkgrey100)[1]};

    &:hover,
    &:focus {
      cursor: not-allowed;
    }
`
