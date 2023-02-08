import React from 'react'
import styled from 'styled-components'
import { TouchableOpacity } from 'react-native'
import { categories } from '../../../services/quiz/categories/categories'
import { SafeArea } from '../../../utils/safe-area.components'
import CategoryCard from '../components/category-card.component'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const Wrapper = styled(SafeArea)`
  flex: 1;
`

const CategoriesScreen = ({ navigation }) => {
  return (
    <Wrapper>
      <ScrollContainer>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            onPress={() =>
              navigation.navigate('CategoryLevels', categories[category.id - 1])
            }
          >
            <CategoryCard name={category.name} height={140} />
          </TouchableOpacity>
        ))}
      </ScrollContainer>
    </Wrapper>
  )
}

export default CategoriesScreen
