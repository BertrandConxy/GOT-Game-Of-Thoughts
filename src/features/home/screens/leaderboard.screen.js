import React from 'react'
import styled from 'styled-components/native'
import { SafeArea } from '../../../utils/safe-area.components'
import { Text } from '../../../components/typography/text.component'
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
    </SafeArea>
  )
}

export default LeaderBoardScreen
