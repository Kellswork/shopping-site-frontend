import React, { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ReactLoading from 'react-loading'
import { Alert, Label, Input, Close } from '../atoms'

import { FormButton } from '../atoms/buttons'
import {
  CardContainer,
  CardContent,
  Form,
  InputDiv,
  Para,
  Loading,
} from './styled'

const ResetPassordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please input a valid email')
    .required('email is required'),
})

const url = 'http://localhost:3000/api/v1/auth/resetPassword'

export const ResetPassword = () => {
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
      <h4> FORGOT PASSWORD </h4>
      <CardContent>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={ResetPassordSchema}
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
                  `SEND PASSWORD LINK`
                )}
              </FormButton>
            </Form>
          )}
        </Formik>
      </CardContent>
    </CardContainer>
  )
}
