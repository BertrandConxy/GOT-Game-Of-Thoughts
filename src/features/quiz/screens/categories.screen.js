import React from 'react'
import CategoryCard from '../components/category-card.component'
import { SafeArea } from '../../../utils/safe-area.components'
import { ScrollContainer } from '../../../components/scroll-view/scroll-view.component'

const arr = [1, 2, 3, 4, 5, 6, 7]

const CategoriesScreen = () => {
  return (
    <SafeArea>
      <ScrollContainer>
        {arr.map((item, index) => {
          return <CategoryCard key={index} />
        })}
      </ScrollContainer>
    </SafeArea>
  )
}

export default CategoriesScreen
