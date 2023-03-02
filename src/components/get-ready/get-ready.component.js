import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import styled from 'styled-components/native'
import { theme } from '../../infrastructure/theme'
import { Text } from '../typography/text.component'
import { Spacer } from '../spacer/spacer.component'

const ReadyView = styled.View`
  align-items: center;
`
const RulesContainer = styled.View`
  background-color: ${(props) => props.theme.colors.bg.primary};
  padding: ${(props) => props.theme.space[3]};
  margin: ${(props) => props.theme.space[3]};
  border-radius: ${(props) => props.theme.sizes[0]};
`

const GetReadyComponent = ({ navigation, Next, contest }) => {
  const { type, instructions } = contest
  return (
    <ReadyView>
      <Image
        source={require('../../../assets/ready-1.png')}
        style={styles.illustrator}
      />
      <Spacer position="top" size="medium" />
      <Text variant="titleBrand">{type} Rules</Text>
      <Spacer position="bottom" size="small" />
      <RulesContainer>
        {instructions.map((instruction, index) => (
          <Text variant="bodyWhite" key={index}>
            * {instruction}
          </Text>
        ))}
      </RulesContainer>
      <TouchableOpacity
        onPress={() => navigation.navigate(Next, { challenge: contest })}
      >
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

export default GetReadyComponent

const styles = StyleSheet.create({
  illustrator: {
    width: '100%',
    height: '55%',
    resizeMode: 'contain',
  },
})
