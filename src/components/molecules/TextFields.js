import React from 'react'
import styled from 'styled-components'
import { GeneralInput, SearchButton } from '../atoms'

const SearchDiv = styled.div`
  width: 390px;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`

export const InputButton = (props) => (
  <SearchDiv>
    <GeneralInput />
    <SearchButton>{props.text}</SearchButton>
  </SearchDiv>
)
