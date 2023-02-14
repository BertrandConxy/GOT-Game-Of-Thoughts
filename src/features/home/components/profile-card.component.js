import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'
import { View } from 'react-native'
import { theme } from '../../../infrastructure/theme'
import { Divider } from 'react-native-paper'

import React from 'react'

const ImageWrapper = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: 70px;
  height: 80px;
`

const ProfileContainer = styled.View`
  align-items: center;
  justify-content: space-between;
  margin-vertical: 10px;
  padding-horizontal: 8px;
`

const ProfileCard = () => {
  return (
    <>
      <ProfileContainer style={{ flexDirection: 'row' }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            flexGrow: 1,
          }}
        >
          <Text style={{ alignSelf: 'center' }} variant="hint">
            #1
          </Text>
          <ImageWrapper
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            }}
          />
          <View>
            <Text variant="title">Karla_ires</Text>
            <Text
              style={{ color: theme.colors.text.secondary }}
              variant="label"
            >
              Highest Level: 20
            </Text>
          </View>
        </View>
        <View style={{ flexGrow: 5 }}>
          <Text style={{ alignSelf: 'flex-end' }} variant="titleBrand">
            1000
          </Text>
        </View>
      </ProfileContainer>
      <Divider bold />
    </>
  )
}

export default ProfileCard
