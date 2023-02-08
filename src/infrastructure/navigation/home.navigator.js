import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../../features/home/screens/home.screen'
import LeaderBoardScreen from '../../features/home/screens/leaderboard.screen'

const HomeStack = createNativeStackNavigator()

const HomeNavigator = () => {
  return (
    <HomeStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 10 },
      }}
    >
      <HomeStack.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{ contentStyle: { paddingHorizontal: 0 } }}
      />
      <HomeStack.Screen
        name="LeaderBoardScreen"
        component={LeaderBoardScreen}
        options={{ contentStyle: { paddingHorizontal: 0 } }}
      />
    </HomeStack.Navigator>
  )
}

export default HomeNavigator
