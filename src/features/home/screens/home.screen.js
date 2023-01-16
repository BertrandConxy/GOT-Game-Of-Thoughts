import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Icon from 'react-native-vector-icons/FontAwesome'

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.topBar}>
        <Text>GOT</Text>
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
  },
})
