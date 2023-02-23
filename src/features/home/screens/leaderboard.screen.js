import React from 'react'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { Spacer } from '../../../components/spacer/spacer.component'
import Header from '../components/header.component'
import TopRated from '../components/top-rated.component'
import TopRiddles from '../components/top-riddles.component'
import TopGk from '../components/top-gk.component'

const LeaderBoardScreen = () => {
  return (
    <ScrollView>
      <SafeArea>
        <Header title="GOTs" size="primary" />
        <TopRated />
        <Spacer position="bottom" size="large" />
        <Divider />
        <Header title="Best In Riddles" />
        <TopRiddles />
        <Divider />
        <Header title="Best In GK" />
        <TopGk />
      </SafeArea>
    </ScrollView>
  )
}

export default LeaderBoardScreen
