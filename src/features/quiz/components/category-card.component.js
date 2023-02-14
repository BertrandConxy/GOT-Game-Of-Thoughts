import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../components/typography/text.component'

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  border-radius: 15px;
  flex-direction: row;
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
