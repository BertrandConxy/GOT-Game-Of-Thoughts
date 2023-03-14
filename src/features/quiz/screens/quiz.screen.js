import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const QuizView = styled.View``

const QuizScreen = ({ navigation, route }) => {
  const { Questionnaire } = route.params
  return (
    <QuizView>
      <QuestionnaireComponent
        navigation={navigation}
        Questionnaire={Questionnaire}
        Next="QuizResults"
      />
    </QuizView>
  )
}

export default QuizScreen
