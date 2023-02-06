import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../components/typography/text.component'

const Card = styled.View`
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  border-radius: 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: ${(props) => props.height}px;
`

const CategoryCard = ({ height, name, status = null }) => {
  return (
    <Card height={height}>
      <Text variant="titleWhite">{name}</Text>
      {status && status === 'closed' && (
        <Icon name="lock" size={35} color="#fff" style={{ marginLeft: 10 }} />
      )}
    </Card>
  )
}

export default CategoryCard
