import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
import { ProgressBar } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { Text } from '../../../components/typography/text.component'
import { theme } from '../../../infrastructure/theme'
import {
  TopContainer,
  QuestionContainer,
  QuestionBox,
  Rounded,
  AnswerStatusView,
  NextButton,
  TimerBg,
} from '../../../features/quiz/components/quiz.styles'
import Questionnaires from '../../../services/quiz/mock/questions'

const Battle = ({
  navigation = navigation,
  Next = 'BattleResultScreen',
  Questionnaire = Questionnaires,
}) => {
  const { name, hasCountDown, counterSet, questions } = Questionnaire
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
  const [counter, setCounter] = useState(counterSet)
  // interval
  let interval = null

  // Progress bar
  const progressPercentage = index / questions.length

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
      navigation.navigate(Next, { answers: answers, points: points })
      return
    }
  }

  // counter reset
  useEffect(() => {
    interval = setTimeout(countDown, 1000)
    return () => {
      clearTimeout(interval)
    }
  }, [counter])

  return (
    <SafeArea>
      <TopContainer>
        <Text variant="titleBrand">{name}</Text>
        {hasCountDown ? <TimerBg size={45}>{counter}</TimerBg> : null}
      </TopContainer>
      <TopContainer>
        <Text>Your Progress</Text>
        <Text>
          ({index}/{questions.length}) questions answered
        </Text>
      </TopContainer>
      {/* Progress bar */}
      <ProgressBar
        progress={progressPercentage}
        color={theme.colors.bg.primary}
      />
      <QuestionContainer>
        <Text variant="title">{question}</Text>
        <ScrollView>
          {options.map((opt) => (
            <TouchableOpacity
              key={opt.id}
              onPress={() => {
                selectedAnswerIndex === null && setSelectedAnswerIndex(opt.id)
              }}
            >
              <QuestionBox
                style={
                  selectedAnswerIndex === opt.id && opt.id == correctAnswerIndex
                    ? [styles.correct]
                    : selectedAnswerIndex != null &&
                      selectedAnswerIndex == opt.id
                    ? [styles.wrong]
                    : null
                }
              >
                <Rounded>
                  {selectedAnswerIndex === opt.id &&
                  opt.id == correctAnswerIndex ? (
                    <Icon
                      name="check"
                      size={22}
                      color={theme.colors.ui.success}
                    />
                  ) : selectedAnswerIndex != null &&
                    selectedAnswerIndex == opt.id ? (
                    <Icon
                      name="cross"
                      size={22}
                      color={theme.colors.ui.error}
                    />
                  ) : (
                    <Text>{opt.options}</Text>
                  )}
                </Rounded>
                <Text>{opt.answer}</Text>
              </QuestionBox>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </QuestionContainer>
      {answerStatus === null ? null : (
        <AnswerStatusView>
          {answerStatus === null ? null : (
            <Text variant="title" style={{ textAlign: 'center' }}>
              {!!answerStatus ? 'Correct Answer' : 'Wrong Answer'}
            </Text>
          )}

          {index + 1 >= Questionnaire.questions.length ? (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(Next, {
                  answers: answers,
                  points: points,
                })
              }
            >
              <NextButton
                icon="check-decagram"
                mode="contained"
                buttonColor={theme.colors.bg.primary}
              >
                Done
              </NextButton>
            </TouchableOpacity>
          ) : answerStatus === null ? null : (
            <TouchableOpacity onPress={() => setIndex(index + 1)}>
              <NextButton
                mode="contained"
                icon="skip-next"
                buttonColor={theme.colors.bg.primary}
              >
                Next Question
              </NextButton>
            </TouchableOpacity>
          )}
        </AnswerStatusView>
      )}
    </SafeArea>
  )
}

export default Battle

const styles = StyleSheet.create({
  correct: {
    backgroundColor: '#7EF893',
  },
  wrong: {
    backgroundColor: '#F57D7D',
  },
})
