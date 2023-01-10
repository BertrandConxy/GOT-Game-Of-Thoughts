import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuizReadyScreen from '../../features/quiz/screens/quiz-ready.screen'
import QuizScreen from '../../features/quiz/screens/quiz.screen'

const QuizStack = createNativeStackNavigator()

const QuizNavigator = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <QuizStack.Screen name="QuizReady" component={QuizReadyScreen} />

      <QuizStack.Screen name="Quiz" component={QuizScreen} />
    </QuizStack.Navigator>
  )
}

export default QuizNavigator
