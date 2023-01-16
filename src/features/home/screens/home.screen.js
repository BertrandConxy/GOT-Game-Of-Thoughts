import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.topBar}>
        <Text style={styles.brand}>GOT</Text>
        <Icon name="bell" size={25} color="#005D0C" />
      </View>
    </SafeArea>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  topBar: {
    backgroundColor: '#666AF6',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  brand: {
    fontSize: 30,
    fontWeight: 'bold',
  },
})
