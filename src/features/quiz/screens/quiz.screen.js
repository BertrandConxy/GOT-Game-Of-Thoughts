import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { Badge } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import questions from '../../../services/quiz/mock/questions'

const QuizScreen = () => {
  const { question, options, correctAnswerIndex } = questions[0]
  return (
    <SafeArea>
      <View style={[styles.flexRow, styles.spaceBtn]}>
        <Text style={styles.heading}>Quiz Challenge 1</Text>
        <Badge size={45} style={styles.badge}>
          15
        </Badge>
      </View>
      <View style={[styles.flexRow, styles.spaceBtn]}>
        <Text style={styles.subHeading}>Your Progress</Text>
        <Text>(0/5) answered</Text>
      </View>

      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <ScrollView>
          {options.map((opt) => (
            <View key={opt.id} style={styles.flexRow}>
              <Text>{opt.options}</Text>
              <Text>{opt.answer}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeArea>
  )
}

export default QuizScreen

const styles = StyleSheet.create({
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  spaceBtn: {
    justifyContent: 'space-between',
  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#666AF6',
  },
  question: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 5,
  },
  subHeading: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  badge: {
    backgroundColor: '#666AF6',
  },
  questionContainer: {
    marginTop: 20,
    backgroundColor: '#F0F8FF',
    padding: 10,
    borderRadius: 6,
  },
})
