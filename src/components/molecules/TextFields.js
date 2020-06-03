import React from 'react'
import styled from 'styled-components'
import { Field } from 'formik'

import {
  typeScale,
  neutrals,
  radius,
  primaryBlue,
  headerFont,
  spacingUnit,
} from '../../utils'

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
  &:focus {
    border: 1px solid ${primaryBlue[4]};
  }
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

// export const LastNameInput = (props) => (
//   <InputDiv>
//     <Label htmlFor="lastname">
//       Lastname<span className="req"> *</span>
//       <Input
//         type="text"
//         id="lastname"
//         name="lastname"
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//         value={props.value}
//       />
//     </Label>
//   </InputDiv>
// )
// export const EmailInput = (props) => (
//   <InputDiv>
//     <Label htmlFor="email">
//       Email<span className="req"> *</span>
//       <Input
//         type="email"
//         id="email"
//         name="email"
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//         value={props.value}
//       />
//     </Label>
//   </InputDiv>
// )

// export const PasswordInput = (props) => (
//   <InputDiv>
//     <Label htmlFor="password">
//       Password<span className="req"> *</span>
//       <Input
//         type="password"
//         id="password"
//         name="password"
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//         value={props.value}
//       />
//     </Label>
//   </InputDiv>
// )
// export const ConfirmPasswordInput = (props) => (
//   <InputDiv>
//     <Label htmlFor="confirmPassword">
//       Confirm Password<span className="req"> *</span>
//       <Input
//         type="password"
//         id="confirmPassword"
//         name="confirmPassword"
//         onChange={props.handleChange}
//         onBlur={props.handleBlur}
//         value={props.value}
//       />
//     </Label>
//   </InputDiv>
// )
