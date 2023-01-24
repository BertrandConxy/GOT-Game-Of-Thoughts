import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'
import { theme } from '../../../infrastructure/theme'
import { Text } from '../../../components/typography/text.component'
import { Spacer } from '../../../components/spacer/spacer.component'

const ReadyView = styled.View`
  align-items: center;
`
const RulesContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
`

const QuizReadyScreen = ({ navigation }) => {
  return (
    <ReadyView>
      <Image
        source={require('../../../../assets/ready-1.png')}
        style={styles.illustrator}
      />
      <Spacer position="top" size="medium" />
      <Text variant="titleBrand">Quiz Rules</Text>
      <Spacer position="bottom" size="small" />
      <RulesContainer>
        <Text variant="bodyWhite">
          {' '}
          * For each correct answer you get 5 points{' '}
        </Text>
        <Text variant="bodyWhite">
          {' '}
          * There is no negative marking for the wrong answer{' '}
        </Text>
        <Text variant="bodyWhite">
          {' '}
          * Each question has a time of 15 seconds{' '}
        </Text>
        <Text variant="bodyWhite"> * All questions are compulsory </Text>
      </RulesContainer>
      <TouchableOpacity onPress={() => navigation.navigate('QuizRunning')}>
        <Button
          icon="flag-checkered"
          mode="contained"
          buttonColor={theme.colors.bg.primary}
        >
          Start Quiz
        </Button>
      </TouchableOpacity>
    </ReadyView>
  )
}

export default QuizReadyScreen

const styles = StyleSheet.create({
  illustrator: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
})
