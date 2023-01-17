import React, { useState, useEffect } from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { Badge, Button, ProgressBar, MD3Colors } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import questions from '../../../services/quiz/mock/questions'

const QuizScreen = ({ navigation }) => {
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

  // Progress bar
  const progressPercentage = Math.floor((index / questions.length) * 100)

  // Pressing the correct answer option
  useEffect(() => {
    if (selectedAnswerIndex != null) {
      if (selectedAnswerIndex == correctAnswerIndex) {
        setPoints((points) => points + 5)
        setAnswerStatus(true)
        setAnswers([...answers, { question: index + 1, answer: true }])
      } else {
        setAnswerStatus(false)
        setAnswers([...answers, { question: index + 1, answer: false }])
      }
    }
  }, [selectedAnswerIndex])

  // resetting selectedAnswerIndex after each question
  useEffect(() => {
    setSelectedAnswerIndex(null)
    setAnswerStatus(null)
  }, [index])

  // Countdown function
  const countDown = () => {
    if (counter >= 1) {
      setCounter((counter) => counter - 1)
    }
    if (counter === 0) {
      if (index + 2 > questions.length) {
        navigation.navigate('QuizResults', { answers: answers, points: points })
        return
      }
      setIndex((index) => index + 1)
      setCounter(15)
    }
  }

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

  return (
    <SafeArea>
      <View style={[styles.flexRow, styles.spaceBtn]}>
        <Text style={styles.heading}>Quiz Challenge 1</Text>
        <Badge size={45} style={styles.badge}>
          {counter}
        </Badge>
      </View>
      <View style={[styles.flexRow, styles.spaceBtn]}>
        <Text style={styles.subHeading}>Your Progress</Text>
        <Text>
          ({index}/{questions.length}) questions answered
        </Text>
      </View>
      {/* Progress bar */}
      <ProgressBar progress={progressPercentage} color="#666AF6" />
      <View style={styles.questionContainer}>
        <Text style={styles.question}>{question}</Text>
        <ScrollView>
          {options.map((opt) => (
            <TouchableOpacity
              key={opt.id}
              onPress={() => {
                selectedAnswerIndex === null && setSelectedAnswerIndex(opt.id)
              }}
            >
              <View
                style={
                  selectedAnswerIndex === opt.id && opt.id == correctAnswerIndex
                    ? [styles.flexRow, styles.contentWrapper, styles.correct]
                    : selectedAnswerIndex != null &&
                      selectedAnswerIndex == opt.id
                    ? [styles.flexRow, styles.contentWrapper, styles.wrong]
                    : [styles.flexRow, styles.contentWrapper]
                }
              >
                <Text style={styles.rounded}>
                  {selectedAnswerIndex === opt.id &&
                  opt.id == correctAnswerIndex ? (
                    <Icon name="check" size={22} color="#005D0C" />
                  ) : selectedAnswerIndex != null &&
                    selectedAnswerIndex == opt.id ? (
                    <Icon name="cross" size={22} color="#F02E2E" />
                  ) : (
                    <Text>{opt.options}</Text>
                  )}
                </Text>
                <Text>{opt.answer}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={answerStatus === null ? null : styles.answerStatusView}>
        {answerStatus === null ? null : (
          <Text style={answerStatus == null ? null : styles.answerStatus}>
            {!!answerStatus ? 'Correct Answer' : 'Wrong Answer'}
          </Text>
        )}

        {index + 1 >= questions.length ? (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('QuizResults', {
                answers: answers,
                points: points,
              })
            }
          >
            <Button
              icon="check-decagram"
              mode="contained"
              style={styles.button}
              buttonColor="#666AF6"
            >
              Done
            </Button>
          </TouchableOpacity>
        ) : answerStatus === null ? null : (
          <TouchableOpacity onPress={() => setIndex(index + 1)}>
            <Button
              mode="contained"
              icon="skip-next"
              style={styles.button}
              buttonColor="#666AF6"
            >
              Next Question
            </Button>
          </TouchableOpacity>
        )}
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
    marginVertical: 10,
    backgroundColor: 'white',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    height: 10,
    borderRadius: 20,
    justifyContent: 'center',
  },
  barProgress: {
    backgroundColor: '#666AF6',
    borderRadius: 12,
    position: 'absolute',
    left: 0,
    height: 10,
    right: 0,
    marginTop: 20,
  },
  correct: {
    backgroundColor: '#7EF893',
  },
  wrong: {
    backgroundColor: '#F57D7D',
  },
  answerStatusView: {
    marginTop: 45,
    backgroundColor: '#F0F8FF',
    padding: 10,
    borderRadius: 7,
    height: 120,
  },
  answerStatus: {
    fontSize: 17,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  button: {
    padding: 1,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 15,
  },
})
