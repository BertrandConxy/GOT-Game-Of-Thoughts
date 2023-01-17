import React from 'react'
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native'
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
            <Card.Cover
              style={styles.cardImage}
              source={{ uri: 'https://picsum.photos/700' }}
            />
            <Text style={styles.cardText} variant="titleLarge">
              Card Title
            </Text>
          </Card.Content>
        </Card>
        <View>
          <ImageBackground
            source={{ uri: 'https://picsum.photos/700' }}
            style={{
              width: 400,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <View style={styles.imageCover}></View>
            <Text style={styles.cardText} variant="titleLarge">
              Card Title
            </Text>
          </ImageBackground>
        </View>
        <Card elevation={2} mode="elevated" style={styles.card}>
          <Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card.Content>
        </Card>
        <Card elevation={2} mode="elevated" style={styles.card}>
          <Card.Content>
            <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
          </Card.Content>
        </Card>
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
})
