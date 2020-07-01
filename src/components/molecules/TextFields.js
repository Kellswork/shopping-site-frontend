import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GeneralInput, SearchButton, SearchIcon } from '../atoms'
import { spacingUnit, neutrals, radius, typeScale } from '../../utils'

const Div = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
  position: relative;
`
const Input = styled(GeneralInput)`
  padding-left: ${spacingUnit[1]};
  width: 100%;
  position: relative;
  &::placeholder {
    font-size: ${typeScale.helperText};
    color: ${neutrals.lightgrey300};
  }
  border: none;
  padding-top: 8px;
  padding-bottom: 8px;
`
const SInput = styled(Input)`
  border-radius: ${radius.sm};
`
export const InputButton = (props) => (
  <Div>
    <Input placeholder={props.placeholder} />
    <SearchButton className="searchbtn">{props.text}</SearchButton>
  </Div>
)

export const SearchInput = (props) => (
  <Div>
    <SInput placeholder={props.placeholder} />
    <SearchIcon />
  </Div>
)

InputButton.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
}

SearchInput.propTypes = {
  placeholder: PropTypes.string,
}
