import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import GetReadyComponent from '../../../components/get-ready/get-ready.component'

const SurveysReady = ({ navigation, route }) => {
  const { ListItem } = route.params

  return (
    <SafeArea>
      <GetReadyComponent
        navigation={navigation}
        Next="Survey"
        Questionnaire={ListItem}
      />
    </SafeArea>
  )
}

export default SurveysReady
