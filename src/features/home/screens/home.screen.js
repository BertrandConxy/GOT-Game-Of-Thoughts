import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { options } from '../components/options'
import OptionCard from '../components/option-card.component'
import { Text } from 'react-native-paper'

const HomeScreen = () => {
  return (
    <SafeArea>
      <View style={styles.topBar}>
        <Text style={styles.brand}>GOT</Text>
        <Icon name="bell" size={25} color="#fff" />
      </View>
      <ScrollView style={styles.cardView}>
        {options.map((option, i) => (
          <OptionCard
            key={i}
            imageCover={option.imageCover}
            option={option.option}
          />
        ))}
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
    marginBottom: 70,
    paddingHorizontal: 10,
  },
  card: {
    backgroundColor: '#fff',
    position: 'relative',
    marginVertical: 10,
  },
  cardText: {
    color: '#fff',
  },
  cardImage: {
    backgroundColor: '#000',
  },
  imageCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  imageCard: {},
  cardContent: {
    borderRadius: 10,
  },
})
