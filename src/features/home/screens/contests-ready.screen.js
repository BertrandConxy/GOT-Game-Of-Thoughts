import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import GetReadyComponent from '../../../components/get-ready/get-ready.component'

const ContestsReady = ({ navigation, route }) => {
  const { contest } = route.params

  return (
    <SafeArea>
      <GetReadyComponent
        navigation={navigation}
        Next="Contests"
        contest={contest}
      />
    </SafeArea>
  )
}

export default ContestsReady
