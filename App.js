import { StatusBar } from 'expo-status-bar'
import { ThemeProvider } from 'styled-components/native'
import styled from 'styled-components/native'
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

  const AppView = styled.View`
    flex: 1;
    background-color: '#fff';
  `
  return (
    <ThemeProvider theme={theme}>
      <AppView>
        <Navigation />
        <StatusBar style="auto" />
      </AppView>
    </ThemeProvider>
  )
}
