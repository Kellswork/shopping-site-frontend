import React from 'react'
import styled from 'styled-components'
import { GeneralInput, SearchButton } from '../atoms'

const SearchDiv = styled.div`
  width: 390px;
  height: 35px;
  box-sizing: border-box;
`

export const InputButton = (text) => (
  <SearchDiv>
    <GeneralInput />
    <SearchButton>{text}</SearchButton>
  </SearchDiv>
)
