import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const QuizReadyScreen = () => {
  return (
    <View>
      <Image
        source={require('../../../../assets/ready-1.png')}
        style={styles.illustrator}
      />

      <View style={styles.headerView}>
        <Text style={styles.headerText}>Quiz Rules</Text>
      </View>
    </View>
  )
}

export default QuizReadyScreen

const styles = StyleSheet.create({
  illustrator: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  headerView: {
    padding: 10,
    alignItems: 'center',
  },
})
