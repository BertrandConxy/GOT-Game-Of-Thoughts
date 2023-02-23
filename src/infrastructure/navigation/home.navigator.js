import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../features/home/screens/home.screen'
import LeaderBoardScreen from '../../features/home/screens/leaderboard.screen'
import ContestsScreen from '../../features/home/screens/contests.screen'
import SurveysScreen from '../../features/home/screens/surveys.screen'

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
      <HomeStack.Screen name="ContestsScreen" component={ContestsScreen} />
      <HomeStack.Screen name="SurveysScreen" component={SurveysScreen} />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
