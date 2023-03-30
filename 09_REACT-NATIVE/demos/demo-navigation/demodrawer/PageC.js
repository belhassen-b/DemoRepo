import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageC() {
    const navigation = useNavigation()
  return (
    <View>
      <Text>PageC</Text>
      <Button
      title="Acceuil"
      onPress={() => {
        // navigation.navigate("PageA");
       // navigation.navigate("Drawer");
        navigation.navigate("PageA");
      }} />
       <Button
      title="Open Drawer"
      onPress={() => {
        navigation.openDrawer();
      }} />
    </View>
  )
}

const styles = StyleSheet.create({})

