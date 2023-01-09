import { StatusBar } from 'expo-status-bar'
import QuizReadyScreen from './src/features/quiz/screens/quiz-ready.screen'
import { StyleSheet, View } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}>
      <QuizReadyScreen />
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
