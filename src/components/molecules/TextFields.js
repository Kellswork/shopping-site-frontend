import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { GeneralInput, SearchButton } from '../atoms'
import { spacingUnit, neutrals } from '../../utils'

const Div = styled.div`
  width: 100%;
  height: 36px;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;
`
const Input = styled(GeneralInput)`
  padding-left: ${spacingUnit[1]};
  &::placeholder {
    font-size: 14px;
    color: ${neutrals.lightgrey300};
  }
`
export const InputButton = (props) => (
  <Div>
    <Input placeholder={props.placeholder} />
    <SearchButton className="searchbtn">{props.text}</SearchButton>
  </Div>
)

InputButton.propTypes = {
  placeholder: PropTypes.string,
  text: PropTypes.string,
}
