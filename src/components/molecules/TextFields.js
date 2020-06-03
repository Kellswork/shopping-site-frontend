import React from 'react'
import styled from 'styled-components'
import {
  typeScale,
  neutrals,
  radius,
  primaryBlue,
  headerFont,
  spacingUnit,
} from '../../utils'

const Input = styled.input`
  width: ${(props) => props.width || '100%'};
  height: 40px;
  background: ${neutrals.lightgrey100};
  border: 1px solid transparent;
  border-top: none;
  border-bottom: 1px solid ${neutrals.lightgrey100};
  box-shadow: inset 0 1px 2px ${neutrals.lightgrey500}, 0 -1px 1px #fff,
    0 1px 0 #fff;
  border-radius: ${radius.sm};
  margin-bottom: ${spacingUnit[4]};
  padding-left: ${spacingUnit[1]};
  margin-top: ${spacingUnit[2]};
  display: inline-block;
  box-sizing: border-box;
  color: ${neutrals.darkgrey500};
  &:focus {
    border: 1px solid ${primaryBlue[4]};
  }
`
const Label = styled.label`
  font-size: ${typeScale.para};
  font-family: ${headerFont};
  display: block;
  color: ${neutrals.darkgrey500};
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
