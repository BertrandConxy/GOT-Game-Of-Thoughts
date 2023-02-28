import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ContestsListing from '../../features/home/screens/contests-listing.screen'
import ContestsReady from '../../features/home/screens/contests-ready.screen'
import ContestsScreen from '../../features/home/screens/contests.screen'

const ContestsStack = createNativeStackNavigator()

const ContestsNavigator = () => {
  return (
    <ContestsStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 10 },
      }}
    >
      <ContestsStack.Screen
        name="ContestsListing"
        component={ContestsListing}
      />
      <ContestsStack.Screen name="ContestsReady" component={ContestsReady} />
      <ContestsStack.Screen name="Contests" component={ContestsScreen} />
    </ContestsStack.Navigator>
  )
}

export default ContestsNavigator
