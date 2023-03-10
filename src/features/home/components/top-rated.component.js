import React from 'react'
import { Text } from '../../../components/typography/text.component'
import { topRated } from '../../../services/leaderboard/top-rated'
import styled from 'styled-components/native'

const TopRatedContainer = styled.View`
  padding-top: ${(props) => props.theme.space[3]};
  padding-left: ${(props) => props.theme.space[2]};
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
`

const Profile = styled.View``
const ProfileContent = styled.View`
  align-items: center;
`
const ImageWrapper = styled.Image`
  border-radius: ${(props) => props.theme.sizes[0]};
`
const TopRated = () => {
  return (
    <TopRatedContainer>
      <Profile>
        <ImageWrapper
          source={{ uri: topRated[1].imageUrl }}
          style={{ width: 90, height: 100 }}
        />
        <ProfileContent>
          <Text variant="caption">#2</Text>
          <Text variant="label">{topRated[1].userName}</Text>
          <Text variant="titleBrand">{topRated[1].totalScore}</Text>
        </ProfileContent>
      </Profile>
      <Profile>
        <ImageWrapper
          source={{ uri: topRated[0].imageUrl }}
          style={{ width: 110, height: 120 }}
        />
        <ProfileContent>
          <Text variant="caption">#1</Text>
          <Text variant="label">{topRated[0].userName}</Text>
          <Text variant="titleBrand">{topRated[0].totalScore}</Text>
        </ProfileContent>
      </Profile>
      <Profile>
        <ImageWrapper
          source={{ uri: topRated[2].imageUrl }}
          style={{ width: 80, height: 90 }}
        />
        <ProfileContent>
          <Text variant="caption">#3</Text>
          <Text variant="label">{topRated[2].userName}</Text>
          <Text variant="titleBrand">{topRated[2].totalScore}</Text>
        </ProfileContent>
      </Profile>
    </TopRatedContainer>
  )
}

export default TopRated
