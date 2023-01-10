import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import { Badge } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import questions from '../../../services/quiz/mock/questions'

const QuizScreen = () => {
  // index of question
  const [index, setIndex] = useState(0)
  // current question
  const currentQuestion = questions[index]
  const { question, options, correctAnswerIndex } = currentQuestion
  // points
  const [points, setPoints] = useState(0)
  // Answer status(true/false)
  const [answerStatus, setAnswerStatus] = useState(null)
  // answers
  const [answers, setAnswers] = useState([])
  // selected answer
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
  // counter
  const [counter, setCounter] = useState(15)
  // interval
  let interval = null
  // Countdown function
  const countDown = () => {
    if (counter >= 1) {
      setCounter((counter) => counter - 1)
    } else if (counter === 0) {
      setIndex((index) => index + 1)
      setCounter(15)
    }
  }

  // Pressing the correct answer option
  useEffect(() => {
    if (selectedAnswerIndex != null) {
      if (selectedAnswerIndex === correctAnswerIndex) {
        setPoints((points) => points + 5)
        setAnswerStatus(true)
        answers.push({ question: index + 1, answer: true })
      } else {
        setAnswerStatus(false)
        answers.push({ question: index + 1, answer: false })
      }
    }
  }, [selectedAnswerIndex])

  // resetting selectedAnswerIndex after each question
  useEffect(() => {
    selectedAnswerIndex(null)
    setAnswerStatus(null)
  }, [currentQuestion])

  // counter reset
  useEffect(() => {
    interval = setTimeout(countDown, 1000)
    return () => {
      clearTimeout(interval)
    }
  }, [counter])

  // If the index changes
  useEffect(() => {
    if (!interval) {
      setCounter(15)
    }
  }, [index])

  // After completing the quiz
  useEffect(() => {}, [currentQuestion])

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
        <Text>(0/5) questions answered</Text>
      </View>
      {/* Progress bar */}
      <View style={styles.bar}></View>
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <ScrollView>
          {options.map((opt) => (
            <TouchableOpacity
              key={opt.id}
              onPress={() =>
                selectedAnswerIndex === null && setSelectedAnswerIndex(opt.id)
              }
            >
              <View style={[styles.flexRow, styles.contentWrapper]}>
                <Text style={styles.rounded}>{opt.options}</Text>
                <Text>{opt.answer}</Text>
              </View>
            </TouchableOpacity>
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
  rounded: {
    width: 40,
    height: 40,
    borderRadius: 20,
    padding: 10,
    textAlign: 'center',
    borderColor: '#666AF6',
    borderWidth: 1,
    marginRight: 5,
  },
  contentWrapper: {
    borderWidth: 1,
    borderColor: '#666AF6',
    borderRadius: 22,
    marginVertical: 10,
  },

  bar: {
    marginVertical: 15,
  },
})
