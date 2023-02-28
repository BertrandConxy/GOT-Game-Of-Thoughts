import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../features/home/screens/home.screen'
import LeaderBoardScreen from '../../features/home/screens/leaderboard.screen'
import ContestsNavigator from './contest.navigator'
import SurveyNavigator from './survey.navigator'

const HomeStack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <HomeStack.Screen name="HomeScreen" component={HomeScreen} />
      <HomeStack.Screen
        name="LeaderBoardScreen"
        component={LeaderBoardScreen}
      />
      <HomeStack.Screen name="ContestsScreen" component={ContestsNavigator} />
      <HomeStack.Screen name="SurveysScreen" component={SurveyNavigator} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
