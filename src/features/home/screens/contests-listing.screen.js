import React from 'react'
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
        <ListingComponent
          array={contests}
          navigation={navigation}
          Next="ContestsReady"
        />
      )}
    </SafeArea>
  )
}

export default ContestsListing
