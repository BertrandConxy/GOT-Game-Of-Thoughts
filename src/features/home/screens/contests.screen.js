import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const ContestsScreen = ({ navigation, route }) => {
  const { Questionnaire } = route.params
  return (
    <SafeArea>
      <QuestionnaireComponent
        navigation={navigation}
        Questionnaire={Questionnaire}
        Next="Quiz"
      />
    </SafeArea>
  )
}

export default ContestsScreen
