import React from 'react'
import { SafeArea } from '../../../utils/safe-area.components'
import { ScrollView } from 'react-native'
import { Divider } from 'react-native-paper'
import { Spacer } from '../../../components/spacer/spacer.component'
import Header from '../components/header.component'
import { topRated } from '../../../services/leaderboard/top-rated'
import styled from 'styled-components/native'
import { Text } from '../../../components/typography/text.component'
// import Button from '../../../components/button/button.component'
import { Button } from 'react-native-paper'

import TopRiddles from '../components/top-riddles.component'

const Profile = styled.View`
  align-items: center;
  flex-flow: row;
  justify-content: space-around;
`
const ProfileContent = styled.View`
  align-items: center;
`
const ImageWrapper = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
`

const CtaContainer = styled.View`
  flex-flow: row;
  justify-content: space-around;
`

const BattleResult = () => {
  return (
    <ScrollView>
      <SafeArea>
        <Header title="GOT" />
        <Spacer position="bottom" size="large" />
        <Profile>
          <ImageWrapper
            source={{ uri: topRated[0].imageUrl }}
            style={{ width: 110, height: 120 }}
          />
          <ProfileContent>
            <Text variant="body">#1</Text>
            <Text variant="title">{topRated[0].userName}</Text>
            <Text variant="titleBrand">{topRated[0].totalScore}</Text>
          </ProfileContent>
        </Profile>
        <Spacer position="bottom" size="large" />
        <Divider />
        <Header title="Other Participants Scores" />
        <TopRiddles />
        <Divider />
        <CtaContainer>
          {/* <Button
            handleClick={() => console.log('turn to replay')}
            text="Re-Battle"
          />
          <Button
            handleClick={() => console.log('turn to replay')}
            text="Re-Battle"
          /> */}
          <Button mode="outlined">Back</Button>
        </CtaContainer>
      </SafeArea>
    </ScrollView>
  )
}

export default BattleResult
