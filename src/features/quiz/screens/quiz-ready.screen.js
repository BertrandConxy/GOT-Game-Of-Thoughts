import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { Button } from 'react-native-paper'
import React from 'react'

const QuizReadyScreen = () => {
  return (
    <View style={styles.readyView}>
      <Image
        source={require('../../../../assets/ready-1.png')}
        style={styles.illustrator}
      />

      <View style={styles.headerView}>
        <Text style={styles.headerText}>Quiz Rules</Text>
      </View>
      <View style={styles.listContainer}>
        <Text style={styles.listItem}>
          {' '}
          * For each correct answer you get 5 points{' '}
        </Text>
        <Text style={styles.listItem}>
          {' '}
          * There is no negative marking for the wrong answer{' '}
        </Text>
        <Text style={styles.listItem}>
          {' '}
          * Each question has a time of 15 seconds{' '}
        </Text>
        <Text style={styles.listItem}> * All questions are compulsory </Text>
      </View>
      <TouchableOpacity onPress={() => console.log('pressed')}>
        <Button icon="flag-checkered" mode="contained" buttonColor="#666AF6">
          Start
        </Button>
      </TouchableOpacity>
    </View>
  )
}

export default QuizReadyScreen

const styles = StyleSheet.create({
  readyView: {
    alignItems: 'center',
  },
  illustrator: {
    width: '100%',
    height: '60%',
    resizeMode: 'contain',
  },
  headerView: {
    padding: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#666AF6',
  },
  listContainer: {
    padding: 10,
    margin: 10,
    marginBottom: 30,
    borderRadius: 5,
    backgroundColor: '#666AF6',
  },
  listItem: {
    marginBottom: 5,
    color: '#fff',
  },
})
