import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity, View } from 'react-native'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const QuizScreen = ({ navigation }) => {
  return (
    <View>
      <QuestionnaireComponent navigation={navigation} />
    </View>
  )
}

export default QuizScreen
