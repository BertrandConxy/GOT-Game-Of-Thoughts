import React from 'react'
import CategoryCard from '../components/category-card.component'
import styled from 'styled-components'
import { categories } from '../../../services/quiz/categories/categories'
import { SafeArea } from '../../../utils/safe-area.components'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const Wrapper = styled(SafeArea)`
  flex: 1;
`

const CategoriesScreen = () => {
  console.log(categories)
  return (
    <Wrapper>
      <ScrollContainer>
        {categories.map((category) => (
          <CategoryCard
            key={category.id}
            name={category.name}
            backgroundColor={category.color}
          />
        ))}
      </ScrollContainer>
    </Wrapper>
  )
}

export default CategoriesScreen
