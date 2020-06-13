import React from 'react'
import styled from 'styled-components'
import { GeneralInput, SearchButton } from '../atoms'
import { spacingUnit, neutrals } from '../../utils'

const SearchDiv = styled.div`
  width: 390px;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`
const EmailInput = styled(GeneralInput)`
  padding-left: ${spacingUnit[1]};
  &::placeholder {
    font-size: 14px;
    color: ${neutrals.lightgrey300};
  }
`
export const InputButton = (props) => (
  <SearchDiv>
    <EmailInput placeholder={props.placeholder} />
    <SearchButton className="searchbtn">{props.text}</SearchButton>
  </SearchDiv>
)
