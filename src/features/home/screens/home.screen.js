import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import { SafeArea } from '../../../utils/safe-area.components'
import Icon from 'react-native-vector-icons/FontAwesome'
import { options } from '../components/options'
import OptionCard from '../components/option-card.component'
import { Text } from 'react-native-paper'
import {app} from ''

const HomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <View style={styles.topBar}>
        <Text style={styles.brand}>GOT</Text>
        <Icon name="bell" size={25} color="#fff" />
      </View>
      <ScrollView style={styles.cardView}>
        {options.map((option) => (
          <OptionCard
            key={option.id}
            imageCover={option.imageCover}
            option={option.option}
            handlePress={() => navigation.navigate(option.screenName)}
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
})
