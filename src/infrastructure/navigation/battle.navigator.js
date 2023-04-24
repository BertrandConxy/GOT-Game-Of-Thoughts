import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import InviteScreen from '../../features/battle/screens/invite.screen'
import GetReady from '../../features/battle/screens/getReady.screen'
import Battle from '../../features/battle/screens/battle.screen'
import BattleResult from '../../features/battle/screens/battleResult.screen'

const BattleStack = createNativeStackNavigator()

const BattleNavigator = () => {
  return (
    <BattleStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 10 },
      }}
    >
      <BattleStack.Screen name="InviteScreen" component={InviteScreen} />
      <BattleStack.Screen name="GetReadyScreen" component={GetReady} />
      <BattleStack.Screen name="BattleScreen" component={Battle} />
      <BattleStack.Screen name="BattleResultScreen" component={BattleResult} />
    </BattleStack.Navigator>
  )
}

export default BattleNavigator
