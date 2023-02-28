import React from 'react'

import { SafeArea } from '../../../utils/safe-area.components'

import ListingComponent from '../../../components/listing/listing.component'

import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const SurveysListing = ({ navigation }) => {
  const array = new Array(10).fill({ name: 'Surveys' })
  return (
    <SafeArea>
      <ListingComponent array={array} />
    </SafeArea>
  )
}

export default SurveysListing
// HANDLE THE CASE WHEN THERE ARE NO CONTESTS
