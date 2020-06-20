import styled, { css } from 'styled-components'
import {
  border,
  radius,
  typeScale,
  headerFont,
  primaryBlue,
  neutrals,
  warning,
} from '../../utils'

export const PrimaryButton = styled.button`
  width: 80.44px;
  height: 40px;

  background: #52606d;
  box-shadow: 0px 4px 6px rgba(15, 32, 66, 0.2);
  border-radius: 4px;

  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  /* identical to box height */
  text-align: center;

  color: #ffffff;
`

export const SecondaryButton = styled.button`
  padding: 12px 18px;
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
  }

  ${({ submit }) =>
    submit &&
    css`
      background: #5e8aee;
      &:hover,
      &:focus {
        cursor: not-allowed;
      }
    `}
`

export const SearchButton = styled.button`
  padding: 10px 24px;
  height: 34px;
  background: ${warning[7]};
  box-sizing: border-box;
  font-family: Inter;
  font-style: normal;
  font-size: 14px;
  text-align: center;
  border: 1px solid #cbd2d9;
  border-left: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  color: white;
  cursor: pointer;
`
