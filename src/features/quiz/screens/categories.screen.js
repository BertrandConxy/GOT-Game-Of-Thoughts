import React from 'react'
import { Text } from 'react-native'
import CategoryCard from '../components/category-card.component'
import { SafeArea } from '../../../utils/safe-area.components'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const CategoriesScreen = () => {
  return (
    <SafeArea>
      <ScrollContainer>
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </ScrollContainer>
    </SafeArea>
  )
}

export default CategoriesScreen
