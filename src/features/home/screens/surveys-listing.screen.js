import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import { EmptyStorage } from '../../../components/not-found/resource-not-found'
import ListingComponent from '../../../components/listing/listing.component'
import surveys from '../../../services/surveys/mock/surveys'

const ContestsListing = ({ navigation }) => {
  return (
    <SafeArea>
      {contests.length === 0 ? (
        <EmptyStorage name="Contests" />
      ) : (
        <ListingComponent
          array={surveys}
          navigation={navigation}
          Next="SurveysReady"
        />
      )}
    </SafeArea>
  )
}

export default ContestsListing
