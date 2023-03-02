import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const ContestsScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <QuestionnaireComponent navigation={navigation} />
    </SafeArea>
  )
}

export default ContestsScreen
