import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageA({ navigation }) {
  return (
    <View>
      <Text>On va mettre un lien vers la page B !!!</Text>
      {/* <Button title='Go to PageB' onPress={() => navigation.navigate("PageB")} /> */}
      <Button title='Go to PageB Toto' onPress={() => navigation.navigate("PageB", { firstName : "Toto", lastName : "Dupont" , phone : "0123456789"})} />
      <Button title='Go to PageB Tata' onPress={() => navigation.navigate("PageB", { firstName : "Tata" , lastName : "Jardin" , phone : "9123456789"})} />
      <Button title='Go to PageB Titi' onPress={() => navigation.navigate("PageB", { firstName : "Titi", lastName : "Michel" , phone : "6123456789"})} />
    </View>
  )
}

const styles = StyleSheet.create({})