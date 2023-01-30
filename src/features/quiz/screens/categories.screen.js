import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CategoryCard from '../components/category-card.component'
import { SafeArea } from '../../../utils/safe-area.components'

const CategoriesScreen = () => {
  return (
    <SafeArea>
      <Text>CategoriesScreen</Text>
      <CategoryCard />
    </SafeArea>
  )
}

export default CategoriesScreen

const styles = StyleSheet.create({})
