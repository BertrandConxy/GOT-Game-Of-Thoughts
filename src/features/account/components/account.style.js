import React from 'react'
import { colors } from '../../../infrastructure/theme/colors'
import styled from 'styled-components/native'
import { Button, TextInput } from 'react-native-paper'

const ImageBg = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ddd;
  width: 100%;
  height: 100%;
`

const AccountBackground = ({ children }) => {
  return (
    <ImageBg>
      <Title>GOT</Title>
      {children}
    </ImageBg>
  )
}

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  margin-top: ${(props) => props.theme.space[2]};
  border-radius: 10px;
  width: 90%;
`

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`

export const AuthInput = styled(TextInput).attrs({
  selectionColor: colors.brand.primary,
  underlineColor: colors.brand.secondary,
  activeUnderlineColor: colors.brand.primary,
})``

export const Title = styled.Text`
  font-size: 30px;
  color: ${(props) => props.theme.colors.ui.primary};
  font-weight: bold;
`

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: flex-start;
  margin-top: ${(props) => props.theme.space[2]};
`

export default AccountBackground
