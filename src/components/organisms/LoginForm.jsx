import React from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ReactLoading from 'react-loading'

import { Label, Input } from '../atoms/input'

import { FormButton, SecondaryButton } from '../atoms/buttons'
import { IconRight } from '../atoms/icons'
import {
  CardContainer,
  CardContent,
  Form,
  RectDiv,
  InputDiv,
  LoginDiv,
  Para,
  Loading,
} from './styled'

const LoginSchema = yup.object().shape({
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
})

const url = 'http://localhost:3000/api/v1/auth/login'

export const LoginForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post(url, values)
      .then((response) => {
        console.log(response.data)
      })
      .catch((error) => {
        console.log(error.response.data.error)
      })

    setSubmitting(false)
  }

  return (
    <CardContainer>
      <h4> Account Login </h4>
      <CardContent>
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={LoginSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <InputDiv>
                <Label htmlFor="email">
                  Email<span className="req"> *</span>
                  <Input
                    type="email"
                    name="email"
                    {...formik.getFieldProps('email')}
                    error={formik.touched.email && formik.errors.email}
                  />
                </Label>
                <ErrorMessage name="email">
                  {(msg) => <Para>{msg}</Para>}
                </ErrorMessage>
              </InputDiv>
              <InputDiv>
                <Label htmlFor="password">
                  Password<span className="req"> *</span>
                  <Input
                    type="password"
                    name="password"
                    {...formik.getFieldProps('password')}
                    error={formik.touched.password && formik.errors.password}
                  />
                </Label>
                <ErrorMessage name="password">
                  {(msg) => <Para>{msg}</Para>}
                </ErrorMessage>
              </InputDiv>
              <FormButton
                type="submit"
                disabled={!formik.isValid}
                submit={formik.isSubmitting}
              >
                {formik.isSubmitting ? (
                  <Loading>
                    <ReactLoading
                      type="bubbles"
                      color="white"
                      height="60px"
                      width="60px"
                    />
                  </Loading>
                ) : (
                  `LOGIN`
                )}
              </FormButton>
            </Form>
          )}
        </Formik>
        <RectDiv />
        <LoginDiv>
          <p>Don't have an Account?</p>
          <SecondaryButton>
            SIGNUP
            <span>
              <IconRight />
            </span>
          </SecondaryButton>
        </LoginDiv>
      </CardContent>
    </CardContainer>
  )
}
