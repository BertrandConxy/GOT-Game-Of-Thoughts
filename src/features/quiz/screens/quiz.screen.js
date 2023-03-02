import React, { useState, useEffect } from 'react'
import styled from 'styled-components/native'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const QuizView = styled.View``

const QuizScreen = ({ navigation }) => {
  return (
    <QuizView>
      <QuestionnaireComponent navigation={navigation} />
    </QuizView>
  )
}

export default QuizScreen
