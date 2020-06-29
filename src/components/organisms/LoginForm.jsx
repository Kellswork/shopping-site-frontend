import React, { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ReactLoading from 'react-loading'
// import { ToastContainer, toast } from 'react-toastify'
import { Alert, Label, Input, IconRight, Close, CloseDiv } from '../atoms'

import { FormButton, SecondaryButton } from '../atoms/buttons'
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
    .max(50, 'maximum of 50 characters')
    .trim(),
})

const url = 'http://localhost:3000/api/v1/auth/login'

export const LoginForm = () => {
  const [msgResponse, setMsgResponse] = useState('')
  const [error, setError] = useState(false)

  const showAlert = msgResponse && (
    <Alert modifiers={['success', error && 'error']}>
      <strong>{msgResponse}</strong>
      <span className="closeIconWrapper">
        <Close />
      </span>
    </Alert>
  )

  const handleSubmit = (values, { setSubmitting }) => {
    axios
      .post(url, values)
      .then((response) => {
        console.log(response.data.message)
        // notify(response.data.message)
        setMsgResponse(response.data)
      })
      .catch((err) => {
        console.log(err.response.data)
        setError(true)
        setMsgResponse(err.response.data.error)
      })

    setSubmitting(false)
  }

  return (
    <CardContainer>
      {showAlert}
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
            <Form onSubmit={formik.handleSubmit} marginButtom="5rem">
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
          <p className="forgot">Forgot your password?</p>
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
