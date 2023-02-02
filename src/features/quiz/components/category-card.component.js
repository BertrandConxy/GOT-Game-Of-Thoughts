import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 140px;
`

const CategoryCard = ({ name }) => {
  return (
    <Card>
      <Text variant="titleWhite">{name}</Text>
    </Card>
  )
}

export default CategoryCard
