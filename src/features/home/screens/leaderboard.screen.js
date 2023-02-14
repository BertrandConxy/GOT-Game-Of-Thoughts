import React from 'react'
import { Divider } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { Spacer } from '../../../components/spacer/spacer.component'
import Header from '../components/header.component'
import TopRated from '../components/top-rated.component'

const LeaderBoardScreen = () => {
  return (
    <SafeArea>
      <Header title="GOTs" size="primary" />
      <TopRated />
      <Spacer position="bottom" size="large" />
      <Divider />
      <Header title="Best In Riddles" />
    </SafeArea>
  )
}

export default LeaderBoardScreen
