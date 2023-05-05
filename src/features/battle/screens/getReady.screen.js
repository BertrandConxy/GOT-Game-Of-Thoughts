import React, { useEffect, useState, useContext } from 'react'
import { TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'
import { theme } from '../../../infrastructure/theme'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

import { db } from '../../../../firebase'
import { doc, getDoc, onSnapshot, updateDoc } from 'firebase/firestore'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

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
  const [isLeader, setIsLeader] = useState(false)
  const [gameStarted, setGameStarted] = useState(false)
  const { user } = useContext(AuthenticationContext)
  const { gameId } = route.params

  const startBattle = async (gameId) => {
    try {
      const gameSessionRef = doc(db, 'gameSessions', gameId)
      const gameSessionDoc = await getDoc(gameSessionRef)
      const gameSessionData = gameSessionDoc.data()

      await updateDoc(gameSessionRef, {
        state: {
          ...gameSessionData.state,
          gameStarted: true,
        },
      })
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    // Listen for changes to the gameSession document
    const gameSessionRef = doc(db, 'gameSessions', gameId)
    const unsubscribe = onSnapshot(gameSessionRef, (doc) => {
      const gameSessionData = doc.data()
      const gameSessionLeaderId = gameSessionData.leaderId
      const playerId = user.uid
      setPlayers(gameSessionData.players.length)

      if (playerId === gameSessionLeaderId) {
        setIsLeader(true)
      }
    })

    return () => unsubscribe()
  }, [gameId])

  useEffect(() => {
    // Listen for changes to the gameSession document
    const gameSessionRef = doc(db, 'gameSessions', gameId)
    const unsubscribe = onSnapshot(gameSessionRef, (doc) => {
      const gameSessionData = doc.data()
      const Questionnaire = gameSessionData.options.questionnaire
      const TimeLimit = gameSessionData.options.timeLimit
      setGameStarted(gameSessionData.state.gameStarted)

      if (gameStarted) {
        navigation.navigate('BattleScreen', {
          Questionnaire: Questionnaire,
          TimeLimit: TimeLimit,
        })
      }
    })

    return () => unsubscribe()
  }, [gameStarted])

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
        {isLeader ? (
          <TouchableOpacity onPress={() => startBattle(gameId)}>
            <Button
              icon="flag-checkered"
              mode="contained"
              buttonColor={theme.colors.bg.primary}
            >
              Start Quiz
            </Button>
          </TouchableOpacity>
        ) : (
          <Text>Wait till game starts</Text>
        )}
      </RulesContainer>
    </ReadyView>
  )
}

export default GetReady
