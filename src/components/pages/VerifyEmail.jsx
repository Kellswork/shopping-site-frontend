import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { Nav, Footer } from '../organisms'
import { neutrals, spacingUnit, typeScale, headerFont } from '../../utils'
import { CardContainer } from '../organisms/styled'
import { CheckMark } from '../atoms'
import { Container, EmailVerificationCard } from './~styledPages'

function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const VerifyEmail = () => {
  const query = useQuery()
  const history = useHistory()
  const token = query.get('token')
  const url = `http://localhost:3000/api/v1/auth/verifyEmail?token=${token}`
  const [isVerifying, setIsVerifying] = useState(true)
  const [msg, setMessage] = useState('')

  useEffect(() => {
    axios
      .patch(url)
      .then((response) => {
        setIsVerifying(false)
        setMessage(response.data.message)
        setTimeout(() => history.replace('/signup'), 4000)
      })
      .catch((error) => {
        console.log(error.response.data.error)
        setMessage(error.response.data.error)
      })
  }, [])

  return (
    <Container>
      <Nav />
      <CardContainer>
        <EmailVerificationCard height="40%">
          <CheckMark />
          {isVerifying ? 'confirming....' : <h6>{msg}</h6>}
        </EmailVerificationCard>
      </CardContainer>
      <Footer />
    </Container>
  )
}
