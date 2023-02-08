import React from 'react'
import { Image } from 'react-native'
import styled from 'styled-components/native'
import { SafeArea } from '../../../utils/safe-area.components'
import { Text } from '../../../components/typography/text.component'

const TopHeader = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`
const TopRated = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`

const Profile = styled.View``
const ImageWrapper = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
`

const LeaderBoardScreen = () => {
  return (
    <SafeArea>
      <TopHeader>
        <Text variant="titleWhite">GOTs</Text>
      </TopHeader>
      <TopRated>
        <Profile>
          <ImageWrapper
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            }}
            style={{ width: 90, height: 100 }}
          />
        </Profile>
        <Profile>
          <ImageWrapper
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            }}
            style={{ width: 110, height: 120 }}
          />
        </Profile>
        <Profile>
          <ImageWrapper
            source={{
              uri:
                'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
            }}
            style={{ width: 80, height: 90 }}
          />
        </Profile>
      </TopRated>
    </SafeArea>
  )
}

export default LeaderBoardScreen
