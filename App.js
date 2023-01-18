import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import Navigation from './src/infrastructure/navigation'
import { theme } from './src/infrastructure/theme'
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald'
import { useFonts as useLato, Lato_400Regular } from '@expo-google-fonts/lato'

export default function App() {
  const [OswaldLoaded] = useOswald({
    Oswald_400Regular,
  })
  const [LatoLoaded] = useLato({
    Lato_400Regular,
  })

  if (!OswaldLoaded || !LatoLoaded) {
    return null
  }
  return (
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
