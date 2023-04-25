import React from 'react'
import { StyledButton } from './button.style'
import { TouchableOpacity } from 'react-native'

export default function Button({ handleClick, icon = '', text }) {
  return (
    <TouchableOpacity onPress={handleClick}>
      <StyledButton mode="contained" icon={icon}>
        {text}
      </StyledButton>
    </TouchableOpacity>
  )
}
