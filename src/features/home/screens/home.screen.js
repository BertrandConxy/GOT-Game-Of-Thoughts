import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Card, Text } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.topBar}>
        <Text style={styles.brand}>GOT</Text>
        <Icon name="bell" size={25} color="#fff" />
      </View>
      <ScrollView style={styles.cardView}>
        <Card elevation={2} mode="elevated" style={styles.card}>
          <Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card.Content>
        </Card>
      </ScrollView>
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
    color: '#fff',
  },
  cardView: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
  },
})
