import React from 'react'
import { StyledButton } from './button.style'
import { TouchableOpacity } from 'react-native'

export default function Button({ handleClick, icon = '', text, disabled = false }) {
  return (
    <TouchableOpacity onPress={handleClick}>
      <StyledButton mode="contained" icon={icon} disabled={disabled}>
        {text}
      </StyledButton>
    </TouchableOpacity>
  )
}
