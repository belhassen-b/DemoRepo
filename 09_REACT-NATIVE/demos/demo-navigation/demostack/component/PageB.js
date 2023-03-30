import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageB({navigation , route}) {
  const userFirstName = route.params.firstName
  const userLastName = route.params.lastName
  const userPhone = route.params.phone
  return (
    <View style={styles.container}>
      <Text >Nom : </Text><Text style={styles.text}>{userFirstName}</Text>
      <Text >Prenom : </Text><Text style={styles.text}>{userLastName}</Text>
      <Text >telephone : </Text><Text style={styles.text}>{userPhone}</Text>
      <Button title="Go to Page Toto" onPress={() => navigation.navigate("PageC")}/>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    textAlign : "center",
  },
  text : {
    fontSize : 32,
    fontWeight : "bold",
  }
})