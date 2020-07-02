import React, { useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { Alert, Label, Input, Close, CloseDiv } from '../atoms'

import { FormButton } from '../atoms/buttons'
import {
  CardContainer,
  CardContent,
  Form,
  InputDiv,
  Para,
  Loading,
} from './styled'

const newPasswordSchema = yup.object().shape({
  password: yup
    .string()
    .required('Password is required')
    .min(5, 'password must be atleast 5 characters')
    .max(50, 'maximum of 50 characters')
    .trim(),
  confirmPassword: yup
    .string()
    .required('required')
    .oneOf([yup.ref('password'), null], 'passwords do not match'),
})

function useQuery() {
  return new URLSearchParams(useLocation().search)
}
export const NewPassword = () => {
  const query = useQuery()
  const history = useHistory()
  const token = query.get('token')
  const url = `http://localhost:3000/api/v1/auth/newPassword?token=${token}`

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
        setMsgResponse(response.data.message)
        setTimeout(() => history.replace('/login'), 4000)
      })
      .catch((err) => {
        setError(true)
        setMsgResponse(err.response.data.error)
      })
    setSubmitting(false)
  }

  return (
    <CardContainer>
      {showAlert}
      <h4> RESET PASSWORD </h4>
      <CardContent>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={newPasswordSchema}
          onSubmit={handleSubmit}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit} marginButtom="5rem">
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
              <InputDiv>
                <Label htmlFor="confirmPassword">
                  Confirm Password<span className="req"> *</span>
                  <Input
                    type="password"
                    name="confirmPassword"
                    {...formik.getFieldProps('confirmPassword')}
                    error={
                      formik.touched.confirmPassword &&
                      formik.errors.confirmPassword
                    }
                  />
                </Label>
                <ErrorMessage name="confirmPassword">
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
                  `RESET PASSWORD`
                )}
              </FormButton>
            </Form>
          )}
        </Formik>
      </CardContent>
    </CardContainer>
  )
}
