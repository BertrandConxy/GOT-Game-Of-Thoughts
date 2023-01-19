import styled from 'styled-components/native'

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
  background-color: ${(props) => props.theme.colors.bg.tertiary};
  border-width: 1px;
  border-radius: 22px;
  margin-top: ${(props) => props.theme.space[3]};
  margin-bottom: ${(props) => props.theme.space[3]};
`
