import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import CategoryCard from '../components/category-card.component'
import LevelButton from '../components/level-button.component'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const Wrapper = styled(SafeArea)`
  flex: 1;
`

const LevelsScreen = ({ route, navigation }) => {
  const { levels } = route.params
  return (
    <Wrapper>
      <ScrollContainer>
        {levels.map((lev) => (
          <TouchableOpacity
            key={lev.id}
            onPress={() => navigation.navigate('QuizReady')}
          >
            <LevelButton name={lev.level} />
          </TouchableOpacity>
        ))}
      </ScrollContainer>
    </Wrapper>
  )
}

export default LevelsScreen
