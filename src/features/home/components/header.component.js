import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'

const Container = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) =>
    props.size === 'primary' ? props.theme.space[2] : props.theme.space[1]};
`

const Header = ({ title, size = null }) => {
  return (
    <Container size={size}>
      <Text variant="titleWhite">{title}</Text>
    </Container>
  )
}

export default Header
