import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import { EmptyStorage } from '../../../components/not-found/resource-not-found'
import ListingComponent from '../../../components/listing/listing.component'
import surveys from '../../../services/surveys/mock/surveys'

const SurveysListing = ({ navigation }) => {
  return (
    <SafeArea>
      {surveys.length === 0 ? (
        <EmptyStorage name="Surveys" />
      ) : (
        <ListingComponent
          array={surveys}
          navigation={navigation}
          Next="SurveyReady"
        />
      )}
    </SafeArea>
  )
}

export default SurveysListing
