import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageC({navigation}) {
  return (
    <View>
      <Text>PageC</Text>
      <Pressable onPress={() => navigation.navigate("PageA")}>
          <View>
            <Text>Aller à la page A</Text>
          </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({})