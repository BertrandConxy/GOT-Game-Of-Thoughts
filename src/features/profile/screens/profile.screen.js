import { useContext } from 'react'
import { Text } from 'react-native-paper'
import { SafeArea } from '../../../utils/safe-area.components'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'
import Button from '../../../components/button/button.component'

const ProfileScreen = () => {
  const { onLogout, user } = useContext(AuthenticationContext)

  return (
    <SafeArea>
      <Text>This is the profile Screen for user {user.uid}</Text>
      <Button handleClick={onLogout} text="Log out" icon="door" />
    </SafeArea>
  )
}

export default ProfileScreen
