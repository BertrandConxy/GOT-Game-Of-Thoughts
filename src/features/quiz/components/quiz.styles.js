import styled from 'styled-components/native'
import { Button, Badge } from 'react-native-paper'

export const TopContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`

export const QuestionContainer = styled.View`
  margin-top: ${(props) => props.theme.space[4]};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
`

export const QuestionBox = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: #666af6;
  border-width: 1px;
  border-radius: 22px;
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`

export const Rounded = styled.Text`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid;
  border-color: #666af6;
  padding: 7px;
  text-align: center;
  margin-right: 5px;
`
export const AnswerStatusView = styled.View`
  margin-top: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  padding: ${(props) => props.theme.space[2]};
  border-radius: ${(props) => props.theme.sizes[0]};
  height: ${(props) => props.theme.sizes[4]};
`

export const NextButton = styled(Button)`
  padding: 1px;
  margin-left: auto;
  margin-right: auto;
  margin-top: ${(props) => props.theme.space[3]};
`
export const TimerBg = styled(Badge)`
  background-color: #666af6;
`
