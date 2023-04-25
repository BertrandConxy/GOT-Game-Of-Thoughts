import React, { useState } from 'react'
import { Image } from 'react-native'
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

const InviteScreen = ({ navigation }) => {
  const [code, setCode] = useState('')
  return (
    <SafeArea>
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
            handleClick={() => navigation.navigate('GetReadyScreen')}
          />
          <Spacer position="top" size="medium"></Spacer>
          <Centered>
            <Text variant="body">OR</Text>
          </Centered>
          <Spacer position="top" size="medium"></Spacer>
          <Button
            text="Create Battle"
            handleClick={() => console.log('clicked create battle')}
          />
          <Spacer position="top" size="large"></Spacer>
          <Container>
            <InviteCodeContainer>
              <Text variant="body">Xncids444533fff</Text>
            </InviteCodeContainer>
            <Button
              icon="content-copy"
              text="Copy"
              handleClick={() => console.log('clicked copy')}
            />
          </Container>
        </InviteContainer>
      </ImageContainer>
    </SafeArea>
  )
}

export default InviteScreen
