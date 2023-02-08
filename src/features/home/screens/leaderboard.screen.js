import React from 'react'
import styled from 'styled-components/native'
import { SafeArea } from '../../../utils/safe-area.components'
import { Text } from '../../../components/typography/text.component'

const TopHeader = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[2]};
`

const LeaderBoardScreen = () => {
  return (
    <SafeArea>
      <TopHeader>
        <Text variant="titleWhite">G.O.Ts</Text>
      </TopHeader>
    </SafeArea>
  )
}

export default LeaderBoardScreen
