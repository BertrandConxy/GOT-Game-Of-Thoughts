import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SurveysListing from '../../features/home/screens/surveys-listing.screen'
import SurveysReady from '../../features/home/screens/surveys-ready.screen'
import SurveysScreen from '../../features/home/screens/surveys.screen'

const SurveyStack = createNativeStackNavigator()

const SurveyNavigator = () => {
  return (
    <SurveyStack.Navigator
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 10 },
      }}
    >
      <SurveyStack.Screen name="SurveyListing" component={SurveysListing} />
      <SurveyStack.Screen name="SurveyReady" component={SurveysReady} />
      <SurveyStack.Screen name="Survey" component={SurveysScreen} />
    </SurveyStack.Navigator>
  )
}

export default SurveyNavigator
