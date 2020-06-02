import React from 'react'
import styled from 'styled-components'
import {
  typeScale,
  headerFont,
  fontWeight,
  neutrals,
  white,
  radius,
  spacingUnit,
} from '../../utils'
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from '../molecules/TextFields'

import { FormButton } from '../atoms/buttons'

const FormWrapper = styled.div`
  width: 100%;
  max-width: 790px;
  height: 569px;
  background-color: ${white};
  border-radius: ${radius.sm};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`
const FormHeader = styled.h3`
  font-size: ${typeScale.H4};
  font-family: ${headerFont};
  font-weight: ${fontWeight.bold};
  color: ${neutrals.darkgrey300};
  margin: 0 auto;
  padding: ${spacingUnit[4]} 0px;
`

export const Form = styled.form`
  max-width: 394px;
  height: 386px;
  /* border: 1px solid black; */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const FloatDiv = styled.div`
  display: flex;
`

export const SignupForm = () => (
  <FormWrapper>
    <FormHeader>Signup to shop our lovely collections!</FormHeader>
    <Form>
      <FloatDiv>
        <FirstNameInput />
        <LastNameInput />
      </FloatDiv>
      <EmailInput />
      <PasswordInput />
      <ConfirmPasswordInput />
      <FormButton>create your account</FormButton>
    </Form>
  </FormWrapper>
)
