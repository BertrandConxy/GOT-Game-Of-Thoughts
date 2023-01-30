import React from 'react'
import styled from 'styled-components/native'

const Card = styled.View`
  background-color: #000;
  height: 25%;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  margin: 10px;
`
const CardText = styled.Text`
  color: #fff;
  font-size: 14px;
`

const CategoryCard = () => {
  return (
    <Card>
      <CardText>CategoryCard</CardText>
    </Card>
  )
}

export default CategoryCard
