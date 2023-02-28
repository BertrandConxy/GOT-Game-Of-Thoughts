import React from 'react'
import { ScrollView, Text } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'

import ListingComponent from '../../../components/listing/listing.component'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const ContestsListing = ({ navigation }) => {
  const array = new Array(10).fill({ name: 'Contests' })
  return (
    <SafeArea>
      <ListingComponent array={array} />
    </SafeArea>
  )
}

export default ContestsListing
// HANDLE THE CASE WHEN THERE ARE NO CONTESTS
