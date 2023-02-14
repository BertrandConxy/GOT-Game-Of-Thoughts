import React from 'react'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'
import { Button } from 'react-native-paper'

const Level = styled(Button)`
  background-color: ${(props) =>
    props.status === 'open' ? '#4B4FB6' : '#9C9C9C'};
  border-radius: 15px;
  justify-content: center;
  margin: 10px;
  height: 70px;
`

const LevelButton = ({ name, status, handlePress }) => {
  return (
    <Level
      mode="contained"
      icon={status === 'closed' ? 'lock' : null}
      status={status}
      disabled={status === 'closed' ? true : false}
      contentStyle={{ marginTop: 10 }}
      onPress={handlePress}
    >
      <Text style={{ fontSize: 18 }}>Level {name}</Text>
    </Level>
  )
}

export default LevelButton
