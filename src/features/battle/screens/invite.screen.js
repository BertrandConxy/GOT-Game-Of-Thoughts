import React from 'react'
import { Image, ImageBackground } from 'react-native'
import { Text } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { ImageContainer } from '../components/invite.style'

const InviteScreen = () => {
  return (
    <SafeArea>
      <ImageContainer>
        <Image
          source={require('../../../../assets/multiplayer.png')}
          style={{ width: 350, height: 350 }}
        />
      </ImageContainer>
    </SafeArea>
  )
}

export default InviteScreen
