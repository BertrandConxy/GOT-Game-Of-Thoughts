import React from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'

const Card = styled.View`
  background-color: #000;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 140px;
`
const CardText = styled.Text`
  color: #fff;
  font-size: 14px;
`

const CategoryCard = ({ backgroundColor, name }) => {
  return (
    <Card>
      <CardText>{name}</CardText>
    </Card>
  )
}

export default CategoryCard
