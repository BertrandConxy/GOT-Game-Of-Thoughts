import React, { useEffect, useState } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'
import { theme } from '../../../infrastructure/theme'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

import { db } from '../../../../firebase'
import { doc, getDoc, onSnapshot } from 'firebase/firestore'

const ReadyView = styled.View`
  align-items: center;
  justify-content: center;
  flex: 1;
`
const Rules = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
`

const PlayersContainer = styled.View`
  align-items: center;
`

const RulesContainer = styled.View`
  align-items: center;
  justify-content: flex-end;
`

const Players = styled.Text`
  font-size: 120px;
`

const GetReady = ({ navigation, route }) => {
  const [players, setPlayers] = useState(0)
  const { gameId } = route.params

  const getPlayers = async () => {
    const gameSessionRef = doc(db, 'gameSessions', gameId)
    const gameSessionDoc = await getDoc(gameSessionRef)
    const gameSessionData = gameSessionDoc.data()
    setPlayers(gameSessionData.players.length)
  }
  useEffect(() => {
    const gameSessionRef = doc(db, 'gameSessions', gameId)

    // Listen for changes to the gameSession document
    const unsubscribe = onSnapshot(gameSessionRef, (doc) => {
      const gameSessionData = doc.data()
      setPlayers(gameSessionData.players.length)
    })

    return () => unsubscribe()
  }, [gameId])

  return (
    <ReadyView>
      <PlayersContainer>
        <Text variant="titleBrand">Number of Participants</Text>
        <Players>{players}</Players>
      </PlayersContainer>
      <Spacer position="top" size="medium" />
      <RulesContainer>
        <Text variant="titleBrand">Battle Rules</Text>
        <Spacer position="bottom" size="small" />
        <Rules>
          <Text variant="bodyWhite">
            {' '}
            * The Battle is 2 minutes long so, use your time efficiently!{' '}
          </Text>
          <Text variant="bodyWhite">
            {' '}
            * For each correct answer you get 5 points{' '}
          </Text>
          <Text variant="bodyWhite">
            {' '}
            * There is no negative marking for the wrong answer{' '}
          </Text>
          <Text variant="bodyWhite"> * All questions are compulsory </Text>
        </Rules>
        <TouchableOpacity onPress={() => navigation.navigate('BattleScreen')}>
          <Button
            icon="flag-checkered"
            mode="contained"
            buttonColor={theme.colors.bg.primary}
          >
            Start Quiz
          </Button>
        </TouchableOpacity>
      </RulesContainer>
    </ReadyView>
  )
}

export default GetReady
