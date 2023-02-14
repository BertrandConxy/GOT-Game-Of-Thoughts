import React from 'react'
import { View } from 'react-native'
import { Divider } from 'react-native-paper'

import styled from 'styled-components/native'
import ProfileCard from './profile-card.component'

const TopRiddles = () => {
  return (
    <View>
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
      <ProfileCard />
    </View>
  )
}

export default TopRiddles
