import React from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from '../../../components/typography/text.component'
import { Image } from 'react-native'
import styled from 'styled-components/native'

const TopRatedContainer = styled.View`
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
const TopRated = () => {
  return (
    <TopRatedContainer>
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
    </TopRatedContainer>
  )
}

export default TopRated

const styles = StyleSheet.create({})
