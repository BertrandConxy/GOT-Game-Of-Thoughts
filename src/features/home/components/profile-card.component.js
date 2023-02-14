import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'

import React from 'react'

const ImageWrapper = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
  width: 80px;
  height: 90px;
`

const ProfileContainer = styled.View`
  flex-direction: 'row';
  align-items: center;
  justify-content: space-between;
`

const ProfileCard = () => {
  return (
    <ProfileContainer>
      <ImageWrapper
        source={{
          uri:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80',
        }}
      />
      <Text>ProfileCard</Text>
    </ProfileContainer>
  )
}

export default ProfileCard
