import { colors } from '../../infrastructure/theme/colors'
import styled from 'styled-components/native'
import { Button } from 'react-native-paper'

export const StyledButton = styled(Button).attrs({
  buttonColor: colors.brand.primary,
})`
  padding: ${(props) => props.theme.space[2]};
  border-radius: 10px;
`
