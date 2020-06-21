import React, { useState, useEffect } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import styled from 'styled-components'
import axios from 'axios'
import { Nav, Footer } from '../organisms'
import { neutrals, spacingUnit, typeScale, headerFont } from '../../utils'
import { CardContainer } from '../organisms/styled'
import { CheckMark } from '../atoms'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  /* border: 1px solid ${neutrals.lightgrey100}; */
  /* background-color: ${neutrals.white}; */
  margin: 0 auto;
  margin-top: ${spacingUnit[1]};
`
const CardContent = styled.div`
  padding-top: 5%;
  height: 40%;
  text-align: center;
  font-family: ${headerFont};
  justify-content: space-around;
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  h6 {
    font-size: ${typeScale.H6};
    color: ${neutrals.darkgrey400};
    font-weight: bold;
    text-transform: capitalize;
  }
`
function useQuery() {
  return new URLSearchParams(useLocation().search)
}

export const VerifyEmail = () => {
  let query = useQuery()
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
        <CardContent>
          <CheckMark />
          {isVerifying ? 'confirming....' : <h6>{msg}</h6>}
        </CardContent>
      </CardContainer>
      <Footer />
    </Container>
  )
}
