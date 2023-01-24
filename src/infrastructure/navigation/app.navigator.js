import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { theme } from '../theme'
import HomeNavigator from './home.navigator'
import QuizNavigator from './quiz.navigator'

const BattleScreen = () => {
  return <div>BattleScreen</div>
}
const ProfileScreen = () => {
  return <div>ProfileScreen</div>
}

const ICON_NAME = {
  Home: 'home',
  Quiz: 'google-controller',
  Battle: 'sword-cross',
  Profile: 'account',
}

const screenOptions = ({ route }) => {
  const iconName = ICON_NAME[route.name]
  return {
    tabBarIcon: ({ color }) => <Icon name={iconName} size={30} color={color} />,
    tabBarShowLabel: false,
    headerShown: false,
  }
}

const AppNavigator = () => {
  const Tab = createBottomTabNavigator()
  return (
    <Tab.Navigator
      screenOptions={screenOptions}
      barStyle={{ backgroundColor: theme.colors.bg.primary }}
    >
      <Tab.Screen name="Home" component={HomeNavigator} />
      <Tab.Screen name="Quiz" component={QuizNavigator} />
      <Tab.Screen name="Battle" component={BattleScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}

export default AppNavigator
