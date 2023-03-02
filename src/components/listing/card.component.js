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

const ContentView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
`
const PrizeView = styled.View`
  margin-left: ${(props) => props.theme.space[4]};
`

const ListingCard = ({ name, deadline, prizes }) => {
  return (
    <Card>
      <Text variant="titleWhite">{name}</Text>
      <ContentView>
        <Text variant="bodyWhite">DeadLine: {deadline}</Text>
        <Text variant="bodyWhite">Prizes:</Text>
        <PrizeView>
          {prizes.map((prize, index) => (
            <Text key={index} variant="bodyWhite">
              {prize}
            </Text>
          ))}
        </PrizeView>
      </ContentView>
    </Card>
  )
}

export default ListingCard
