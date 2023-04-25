import styled from 'styled-components/native'
import { colors } from '../../../infrastructure/theme/colors'
import { TextInput } from 'react-native-paper'

export const ImageContainer = styled.View`
  align-items: center;
  width: 100%;
  height: 100%;
`
export const InviteContainer = styled.View`
  width: 100%;
  height: 100%;
`

export const BattleInput = styled(TextInput).attrs({
  selectionColor: colors.brand.primary,
  underlineColor: colors.brand.secondary,
  activeUnderlineColor: colors.brand.primary,
})``

export const Centered = styled.View`
  align-items: center;
`

export const InviteCodeContainer = styled.View`
  border: 1px ${(props) => props.theme.colors.ui.secondary};
  background: ${(props) => props.theme.colors.bg.secondary};
  border-radius: 5px;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  margin-right: ${(props) => props.theme.space[1]};
`

export const Container = styled.View`
  flex-flow: row;
  width: 100%;
  padding: 0 ${(props) => props.theme.space[1]};
`
