import React from 'react'
import styled from 'styled-components/native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { Text } from '../../../components/typography/text.component'
import { Button } from 'react-native-paper'

const Level = styled(Button)`
  background-color: ${(props) => props.theme.colors.bg.quaternary};
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  margin: 10px;
  height: 70px;
`

const LevelButton = ({ name, status = null }) => {
  return (
    <Level icon="lock" mode="contained" contentStyle={{ marginTop: 10 }}>
      <Text variant="title">Level {name}</Text>
    </Level>
  )
}

export default LevelButton
