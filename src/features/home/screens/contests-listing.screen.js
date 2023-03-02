import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'

import ListingComponent from '../../../components/listing/listing.component'
import contests from '../../../services/contests/mock/contests'

const ContestsListing = ({ navigation }) => {
  return (
    <SafeArea>
      <ListingComponent array={contests} />
    </SafeArea>
  )
}

export default ContestsListing
// HANDLE THE CASE WHEN THERE ARE NO CONTESTS
