import React from 'react'
import styled from 'styled-components'
import { Formik } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
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
  Label,
  Input,
  InputDiv,
  // FirstNameInput,
  // LastNameInput,
  // EmailInput,
  // PasswordInput,
  // ConfirmPasswordInput,
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
    font-size: ${typeScale.para};
    color: ${neutrals.darkgrey300};
  }
  button {
    font-size: ${typeScale.helperText};
  }
  span {
    padding-left: ${spacingUnit[0]};
  }
`

const signupSchema = yup.object().shape({
  firstname: yup
    .string()
    .required('firstname is required')
    .max(50, 'maximum of 50 characters')
    .matches(/^[a-zA-Z]+$/i, 'firstname must contain only alphabets')
    .matches(/^\S{3,}$/, 'firstname cannot contain whitespaces')
    .trim(),
  lastname: yup
    .string()
    .required('lastname is required')
    .max(50, 'maximum of 50 characters')
    .matches(/^[a-zA-Z]+$/i, 'lastname must contain only alphabets')
    .matches(/^\S{3,}$/, 'lastname cannot contain whitespaces')
    .trim(),
  email: yup
    .string()
    .email('Please input a valid email')
    .required('email is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'password must be atleast 5 characters')
    .max(50, 'maximum of 50 characters')
    .trim(),
  confirmPassword: yup
    .string()
    .required('required')
    .oneOf([yup.ref('password'), null], 'password does not match'),
})

export const SignupForm = () => (
  <CardContainer>
    <h4> Signup to shop our lovely collections! </h4>
    <CardContent>
      <Formik
        initialValues={{
          fistname: '',
          lastname: '',
          email: '',
          password: '',
          confirmPassword: '',
        }}
        validationSchema={signupSchema}
        onSubmit={(values, { setSubmitting }) => {
          axios
            .post('http://localhost:3500/api/v1/auth/register', values)
            .then((res) => console.log(res.data))
          setSubmitting(false)
        }}
      >
        {(formik) => (
          <Form onSubmit={formik.handleSubmit}>
            <FloatDiv>
              <InputDiv>
                <Label htmlFor="firstname">
                  Firstname<span className="req"> *</span>
                  <Input
                    type="text"
                    id="firstname"
                    name="firstname"
                    width="98.8%"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstname}
                    border={
                      formik.touched.firstname &&
                      formik.errors.firstname &&
                      '1px solid red'
                    }
                  />
                  {formik.touched.firstname && formik.errors.firstname ? (
                    <p style={{ color: 'red' }}>{formik.errors.firstname}</p>
                  ) : null}
                </Label>
              </InputDiv>

              <InputDiv>
                <Label htmlFor="lastname">
                  Lastname<span className="req"> *</span>
                  <Input
                    type="text"
                    id="lastname"
                    name="lastname"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastname}
                    border={
                      formik.touched.lastname &&
                      formik.errors.lastname &&
                      '1px solid red'
                    }
                  />
                  {formik.touched.lastname && formik.errors.lastname ? (
                    <p style={{ color: 'red' }}>{formik.errors.lastname}</p>
                  ) : null}
                </Label>
              </InputDiv>
            </FloatDiv>

            <InputDiv>
              <Label htmlFor="email">
                Email<span className="req"> *</span>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  border={
                    formik.touched.email &&
                    formik.errors.email &&
                    '1px solid red'
                  }
                />
                {formik.touched.email && formik.errors.email ? (
                  <p style={{ color: 'red' }}>{formik.errors.email}</p>
                ) : null}
              </Label>
            </InputDiv>

            <InputDiv>
              <Label htmlFor="password">
                Password<span className="req"> *</span>
                <Input
                  type="password"
                  id="password"
                  name="password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  border={
                    formik.touched.password &&
                    formik.errors.password &&
                    '1px solid red'
                  }
                />
                {formik.touched.password && formik.errors.password ? (
                  <p style={{ color: 'red' }}>{formik.errors.password}</p>
                ) : null}
              </Label>
            </InputDiv>

            <InputDiv>
              <Label htmlFor="confirmPassword">
                Confirm Password<span className="req"> *</span>
                <Input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.confirmPassword}
                  border={
                    formik.touched.confirmPassword &&
                    formik.errors.confirmPassword &&
                    '1px solid red'
                  }
                />
                {formik.touched.confirmPassword &&
                formik.errors.confirmPassword ? (
                  <p style={{ color: 'red' }}>
                    {formik.errors.confirmPassword}
                  </p>
                ) : null}
              </Label>
            </InputDiv>

            <FormButton type="submit">CREATE ACCOUNT</FormButton>
          </Form>
        )}
      </Formik>
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
