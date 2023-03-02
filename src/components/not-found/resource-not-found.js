import styled from 'styled-components/native'
import { Text } from '../typography/text.component'

const Container = styled.View`
  align-items: center;
  margin-top: ${(props) => props.theme.space[4]};
`

const ResourceNotFound = () => {
  return (
    <Container>
      <Text>Resource not found | Will place icon here</Text>
    </Container>
  )
}

export default ResourceNotFound

export const EmptyStorage = ({ name }) => {
  return (
    <Container>
      <Text>No {name} available at the moment</Text>
    </Container>
  )
}
