import React from 'react'
import { ScrollView, Text } from 'react-native'
import { Divider } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { Spacer } from '../../../components/spacer/spacer.component'
import Header from '../components/header.component'
import TopRated from '../components/top-rated.component'
import TopRiddles from '../components/top-riddles.component'
import TopGk from '../components/top-gk.component'
import QuestionnaireComponent from '../../../components/questionnaire/questionnaire.component'

const ContestsListing = ({ navigation }) => {
  return (
    <SafeArea>
      <Text>Contests Listing</Text>
    </SafeArea>
  )
}

export default ContestsListing
