import styled from 'styled-components'

const isFocused = () => (`
  color: #333;
  background-color: rgba(0, 126, 255, 0.08);
`)

export default styled.div`
  box-sizing: border-box;
  background-color: #fff;
  color: #666666;
  cursor: pointer;
  display: block;
  padding: 8px 10px;

  ${props => props.isSelected && 'background: yellow;'}
  ${props => props.isFocused && isFocused()}

  &:hover {
    ${isFocused()}
  }

  &:last-child {
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }
`
