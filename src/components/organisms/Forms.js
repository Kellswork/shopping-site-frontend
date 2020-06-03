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
  primaryBlue,
} from '../../utils'
import {
  FirstNameInput,
  LastNameInput,
  EmailInput,
  PasswordInput,
  ConfirmPasswordInput,
} from '../molecules/TextFields'

import { FormButton, SecondaryButton } from '../atoms/buttons'
import { IconRight } from '../atoms/icons'

const CardContainer = styled.div`
  width: 100%;
  max-width: 790px;
  height: 569px;
  display: flex;
  flex-direction: column;
  background-color: ${white};
  border-radius: ${radius.sm};
  box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  h4 {
    font-size: ${typeScale.H4};
    font-family: ${headerFont};
    font-weight: ${fontWeight.bold};
    color: ${neutrals.darkgrey300};
    margin: 0 auto;
    padding-top: ${spacingUnit[6]};
  }
`

const CardContent = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: ${spacingUnit[2.5]};
`

const Form = styled.form`
  max-width: 394px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`

const FloatDiv = styled.div`
  display: flex;
`

const RectDiv = styled.div`
  width: 2.97px;
  height: 272px;
  background: ${primaryBlue[5]};
  margin-bottom: ${spacingUnit[2]};
`
const LoginDiv = styled.div`
  box-sizing: border-box;
  padding-bottom: ${spacingUnit[8]};
  text-align: center;

  p {
    padding-bottom: ${spacingUnit[4]};
    font-family: ${headerFont};
    font-weight: bold;
    font-size: ${spacingUnit[3]};
    color: ${neutrals.darkgrey300};
  }
  button {
    font-size: ${spacingUnit[2.5]};
  }
  span {
    padding-left: ${spacingUnit[0]};
  }
`

export const SignupForm = () => (
  <CardContainer>
    <h4> Signup to shop our lovely collections! </h4>
    <CardContent>
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
      <RectDiv></RectDiv>
      <LoginDiv>
        <p>Already have an account?</p>
        <SecondaryButton>
          LOGIN
          <span>
            <IconRight />
          </span>
        </SecondaryButton>
      </LoginDiv>
    </CardContent>
  </CardContainer>
)
