import React, { useState } from 'react'
import { Image, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import {
  ImageContainer,
  InviteContainer,
  BattleInput,
  Centered,
  InviteCodeContainer,
  Container,
} from '../components/invite.style'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'
import Button from '../../../components/button/button.component'
import { db } from '../../../../firebase'
import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore'
import Questionnaire from '../../../services/quiz/mock/questions'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const InviteScreen = ({ navigation }) => {
  const [code, setCode] = useState('')
  const { user } = useContext(AuthenticationContext)

  const createGameSession = async () => {
    try {
      const gameSessionsRef = collection(db, 'gameSessions')
      const newGameSession = {
        created_at: serverTimestamp(),
        leaderId: user.uid,
        players: [],
        options: {
          questionnaire: Questionnaire,
          timeLimit: 120,
        },
        state: {
          gameStarted: false,
          gameOver: false,
          result: [],
        },
      }
      const docRef = await addDoc(gameSessionsRef, newGameSession)
      setCode(docRef.id)
      return docRef.id
    } catch (error) {
      console.error('Error creating game session:', error)
    }
  }

  const joinGameSession = async (gameId, playerData) => {
    try {
      const gameSessionRef = doc(db, 'gameSessions', gameId)
      const gameSessionDoc = await getDoc(gameSessionRef)

      if (!gameSessionDoc.exists()) {
        throw new Error('Game session does not exist')
      }

      const gameSessionData = gameSessionDoc.data()
      // if (gameSessionData.status !== 'waiting') {
      //   throw new Error('Game session has already been started');
      // }

      await updateDoc(gameSessionRef, {
        players: [...gameSessionData.players, playerData],
      })
      navigation.navigate('GetReadyScreen', { gameId: gameId })
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <SafeArea>
      <ScrollView>
        <ImageContainer>
          <Image
            source={require('../../../../assets/multiplayer.png')}
            style={{ width: 350, height: 350 }}
          />
          <Spacer position="top" size="large"></Spacer>
          <Text variant="titleBrand">Battle & Be The GOT</Text>
          <Spacer position="bottom" size="large"></Spacer>
          <InviteContainer>
            <BattleInput
              label="Join The Battle"
              placeholder="Enter the code"
              mode="outlined"
              value={code}
              onChangeText={(code) => setCode(code)}
            />
            <Spacer position="bottom" size="medium"></Spacer>
            <Button
              text="Join Battle"
              disabled={code === '' ? true : false}
              handleClick={() =>
                joinGameSession(code, { name: 'bertrand', score: 0 })
              }
            />
            <Spacer position="top" size="medium"></Spacer>
            <Centered>
              <Text variant="body">OR</Text>
            </Centered>
            <Spacer position="top" size="medium"></Spacer>
            <Button text="Create Battle" handleClick={createGameSession} />
            <Spacer position="top" size="large"></Spacer>
            <Container>
              <InviteCodeContainer>
                {code === '' ? null : <Text variant="body">{code}</Text>}
              </InviteCodeContainer>
              <Button
                icon="content-copy"
                text="Copy"
                handleClick={() => console.log('clicked copy')}
              />
            </Container>
          </InviteContainer>
        </ImageContainer>
      </ScrollView>
    </SafeArea>
  )
}

export default InviteScreen
