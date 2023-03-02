import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import { EmptyStorage } from '../../../components/not-found/resource-not-found'
import ListingComponent from '../../../components/listing/listing.component'
import contests from '../../../services/contests/mock/contests'

const ContestsListing = ({ navigation }) => {
  return (
    <SafeArea>
      {contests.length === 0 ? (
        <EmptyStorage name="Contests" />
      ) : (
        <ListingComponent array={contests} />
      )}
    </SafeArea>
  )
}

export default ContestsListing
// HANDLE THE CASE WHEN THERE ARE NO CONTESTS
