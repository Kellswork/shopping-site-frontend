import React from 'react'
import styled from 'styled-components'
import {
  typeScale,
  neutrals,
  border,
  radius,
  primaryBlue,
  headerFont,
  spacingUnit,
} from '../utils'

export const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 40px;
  background: ${neutrals.lightgrey100};
  border: ${border(neutrals.lightgrey100)[2]};
  border-radius: ${radius.sm};
  margin-bottom: ${spacingUnit[4]};
  margin-top: ${spacingUnit[1]};
  display: inline-block;
  box-sizing: border-box;
  &:focus {
    border-color: ${primaryBlue[6]};
  }
`
export const Label = styled.label`
  font-size: ${typeScale.para};
  font-family: ${headerFont};
  display: block;
`

export const FirstNameInput = () => (
  <div>
    <Label htmlFor="firstname">
      Firstname<span className="req"> *</span>
      <Input type="text" name="firstname" width="98.8%" />
    </Label>
  </div>
)

export const LastNameInput = () => (
  <div>
    <Label htmlFor="lastname">
      Lastname<span className="req"> *</span>
      <Input type="text" name="lastname" />
    </Label>
  </div>
)
export const EmailInput = () => (
  <div>
    <Label htmlFor="email">
      Email<span className="req"> *</span>
      <Input type="text" name="lastname" />
    </Label>
  </div>
)

export const PasswordInput = () => (
  <div>
    <Label htmlFor="password">
      Password<span className="req"> *</span>
      <Input type="password" name="password" />
    </Label>
  </div>
)
export const ConfirmPasswordInput = () => (
  <div>
    <Label htmlFor="lastname">
      Confirm Password<span className="req"> *</span>
      <Input type="password" name="confirmPassword" />
    </Label>
  </div>
)
