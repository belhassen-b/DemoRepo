import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FavorisScreen() {
  return (
    <View>
      <Text style={styles.titre}>FavorisScreen</Text>
      <Text >Liste de mes recettes favorites</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    titre : {
        fontSize : 25,
    }
})