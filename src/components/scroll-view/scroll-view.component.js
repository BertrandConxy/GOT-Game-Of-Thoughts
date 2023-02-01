import { ScrollView } from 'react-native'
import styled from 'styled-components/native'

export const ScrollContainer = styled(ScrollView).attrs({
  contentContainerStyle: {
    flexGrow: 1,
    marginTop: 5,
    height: 600,
  },
})``

// justifyContent: 'center',
// alignItems: 'center',
// marginBottom: 20,
// borderRadius: 10,
// shadowColor: '#000',
// shadowOffset: {
//   width: 0,
//   height: 2,
// },
// shadowOpacity: 0.25,
// shadowRadius: 4,
// elevation: 5,
