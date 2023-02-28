import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../typography/text.component'

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.brand.secondary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 320px;
`

const ListingCard = ({ name = 'Bertrand' }) => {
  return (
    <Card>
      <Text variant="titleWhite">{name}</Text>
    </Card>
  )
}

export default ListingCard
