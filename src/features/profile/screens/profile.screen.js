import React from 'react'
import { Text } from 'react-native-paper'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'


const ProfileScreen = () => {
  return (
    <ScrollView>
      <SafeArea>
      <View style={styles.card}>
        <View style={styles.imageHolder}>
        </View>
      </View>
      <View style={styles.summaryContainer}>
        <View>
          <Text>255K</Text>
        </View>
        <View>
          <Text>255K</Text>
        </View>
        <View>
          <Text>255K</Text>
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
    marginVertical: 40,
    paddingHorizontal: 40,
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
})