import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import QuizReadyScreen from '../../features/quiz/screens/quiz-ready.screen'
import QuizScreen from '../../features/quiz/screens/quiz.screen'
import ResultScreen from '../../features/quiz/screens/results.screen'

const QuizStack = createNativeStackNavigator()

const QuizNavigator = () => {
  return (
    <QuizStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 10 },
      }}
    >
      <QuizStack.Screen name="QuizReady" component={QuizReadyScreen} />
      <QuizStack.Screen name="QuizRunning" component={QuizScreen} />
      <QuizStack.Screen name="QuizResults" component={ResultScreen} />
    </QuizStack.Navigator>
  )
}

export default QuizNavigator
