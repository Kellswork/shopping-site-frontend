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
  FloatDiv,
  RectDiv,
  InputDiv,
  LoginDiv,
  Para,
  Loading,
} from './styled'

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
    .oneOf([yup.ref('password'), null], 'passwords do not match'),
})

export const SignupForm = (props) => (
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
            .post('http://localhost:3000/api/v1/auth/register', values)
            // eslint-disable-next-line react/prop-types
            .then((response) => props.history.push('/EmailVerification'))
            .catch((error) => console.log(error.response.data.error))
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
                    name="firstname"
                    width="98.8%"
                    {...formik.getFieldProps('firstname')}
                    error={formik.touched.firstname && formik.errors.firstname}
                  />
                </Label>
                <ErrorMessage name="firstname">
                  {(msg) => <Para>{msg}</Para>}
                </ErrorMessage>
              </InputDiv>

              <InputDiv>
                <Label htmlFor="lastname">
                  Lastname<span className="req"> *</span>
                  <Input
                    type="text"
                    name="lastname"
                    {...formik.getFieldProps('lastname')}
                    error={formik.touched.lastname && formik.errors.lastname}
                  />
                </Label>
                <ErrorMessage name="lastname">
                  {(msg) => <Para>{msg}</Para>}
                </ErrorMessage>
              </InputDiv>
            </FloatDiv>
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
                `CREATE ACCOUNT`
              )}
            </FormButton>
          </Form>
        )}
      </Formik>
      <RectDiv />
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
