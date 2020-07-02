import React, { useState } from 'react'
import { Formik, ErrorMessage } from 'formik'
import * as yup from 'yup'
import axios from 'axios'
import ReactLoading from 'react-loading'
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

const newPassordSchema = yup.object().shape({
  email: yup
    .string()
    .email('Please input a valid email')
    .required('email is required'),
})

const url = 'http://localhost:3000/api/v1/auth/resetPassword'

export const NewPassword = () => {
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
        console.log('submitting...')
      })
      .catch((err) => {
        console.log(err.response.data)
        setError(true)
        setMsgResponse(err.response.data.error)
      })

    setSubmitting(false)
    console.log('no more...')
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
          validationSchema={newPassordSchema}
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
                  `NEW PASSWORD LINK`
                )}
              </FormButton>
            </Form>
          )}
        </Formik>
      </CardContent>
    </CardContainer>
  )
}
