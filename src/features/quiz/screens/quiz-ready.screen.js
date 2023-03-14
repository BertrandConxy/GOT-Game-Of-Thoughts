import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import GetReadyComponent from '../../../components/get-ready/get-ready.component'
import Questionnaire from '../../../services/quiz/mock/questions'

const QuizReady = ({ navigation }) => {
  return (
    <SafeArea>
      <GetReadyComponent
        navigation={navigation}
        Next="QuizRunning"
        Questionnaire={Questionnaire}
      />
    </SafeArea>
  )
}

export default QuizReady
