import React from 'react'
import CategoryCard from '../components/category-card.component'
import styled from 'styled-components'
import { SafeArea } from '../../../utils/safe-area.components'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const Wrapper = styled(SafeArea)`
  flex: 1;
`

const CategoriesScreen = () => {
  return (
    <Wrapper>
      <ScrollContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ScrollContainer>
    </Wrapper>
  )
}

export default CategoriesScreen
