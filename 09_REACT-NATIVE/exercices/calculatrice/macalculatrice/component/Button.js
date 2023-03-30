import { Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

//
export default function Button({ onPress, title, isWhite }) {
  return (
      <Pressable onPress={onPress} style={({pressed}) => pressed && styles.pressedItem}>
        <View style={isWhite ? styles.isWhite : styles.isGray}>
          <Text style={isWhite ? styles.isWhiteText : styles.isGrayText}>{title}</Text>
        </View>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  isGray: {
    width: 72,
    height: 72,
    borderRadius: 16,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  isGrayText: {
    color: "white",
    fontSize: 20,
  },
  isWhite: {
    width: 72,
    height: 72,
    borderRadius: 50,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  isWhiteText: {
    color: "black",
    fontSize: 25,
    fontWeight: "bold"
  },
  pressedItem: {
    backgroundColor: "pink"
  }
})