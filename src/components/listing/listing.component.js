import React from 'react'
import { SafeArea } from '../../utils/safe-area.components'

import { FlatList, TouchableOpacity } from 'react-native'
import styled from 'styled-components/native'
import ListingCard from './card.component'

const Listing = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 8,
    marginBottom: 10,
  },
})``

const ListingComponent = ({ array, navigation, Next }) => {
  return (
    <SafeArea>
      <Listing
        data={array}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate(Next, { contest: item })}
            >
              <ListingCard
                name={item.name}
                deadline={item.deadLine}
                prizes={item.prizes}
              />
            </TouchableOpacity>
          )
        }}
      />
    </SafeArea>
  )
}

export default ListingComponent
