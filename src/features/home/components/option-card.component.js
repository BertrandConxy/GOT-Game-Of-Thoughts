import React from 'react'
import { StyleSheet, ImageBackground, View } from 'react-native'
import { Card, Text } from 'react-native-paper'

const OptionCard = ({ imageCover, option }) => {
  return (
    <Card elevation={2} mode="elevated" style={styles.card}>
      <Card.Content style={styles.cardContent}>
        <ImageBackground
          source={imageCover}
          style={{
            width: 340,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <View style={styles.imageCover} />
          <Text style={styles.cardText} variant="titleLarge">
            {option}
          </Text>
        </ImageBackground>
      </Card.Content>
    </Card>
  )
}

export default OptionCard

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 10,
  },
  cardText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
  imageCover: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
  },
})
