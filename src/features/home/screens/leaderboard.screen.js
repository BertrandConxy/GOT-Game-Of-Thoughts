import React from 'react'
import styled from 'styled-components/native'
import { SafeArea } from '../../../utils/safe-area.components'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

import { Divider } from 'react-native-paper'
import TopRated from '../components/top-rated.component'

const TopHeader = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`

const LeaderBoardScreen = () => {
  return (
    <SafeArea>
      <TopHeader>
        <Text variant="titleWhite">GOTs</Text>
      </TopHeader>
      <TopRated />
      <Spacer position="bottom" size="large" />
      <Divider />
    </SafeArea>
  )
}

export default LeaderBoardScreen
