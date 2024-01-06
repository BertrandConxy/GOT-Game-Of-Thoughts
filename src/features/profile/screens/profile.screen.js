import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Header from '../../../components/header/header.component'


const ProfileScreen = () => {
  return (
    <ScrollView>
      <SafeArea>
      <View style={styles.card}>
        <View style={styles.imageHolder}>
        </View>
      </View>
      <View style={styles.namesContainer}>
        <View>
          <Text>Bertrand</Text>
          <Text>@Conxy</Text>
        </View>
      </View>
      <View style={styles.summaryContainer}>
        <View style={styles.summary}>
          <Text>255</Text>
          <Text>Highest Score</Text>
        </View>
        <View style={styles.summary}>
          <Text>2</Text>
          <Text>Position</Text>
        </View>
        <View style={styles.summary}>
          <Text>20</Text>
          <Text>Battles</Text>
        </View>
      </View>

      <View>
        <Header title="Badges" />
        <Text>No badge received yet</Text>
      </View>

      <Header title="Highest level reached" />

      <View style={styles.levelCardContainer}>
        <View style={styles.levelCard}>
        </View>
        <View style={styles.levelCard}>
        </View>

      </View>
      </SafeArea>
    </ScrollView>
  )
}

export default ProfileScreen

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'red',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  imageHolder: {
    backgroundColor: 'blue',
    height:120,
    width:120,
    alignSelf: 'flex-end',
  },
  summaryContainer: {
    marginVertical: 20,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  summary: {
    alignItems: 'center'
  },
  namesContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  levelCardContainer: {
   flexDirection: 'row',
   justifyContent: 'space-around',
  },
  levelCard: {
    backgroundColor: 'blue',
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 2,
    height: 150,
    width: 150,
  }
})