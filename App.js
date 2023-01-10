import { StatusBar } from 'expo-status-bar'
import Navigation from './src/infrastructure/navigation'
import { StyleSheet, View } from 'react-native'

export default function App() {
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
    marginTop: 10,
    backgroundColor: '#fff',
  },
})
