import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageB() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>PageB</Text>
      <Button
      title="Toto"
      onPress={() => {
        // navigation.goBack();
        navigation.navigate("PageA");
      }} />
      <Button
      title="PageC"
      onPress={() => {
        // navigation.goBack();
        navigation.navigate("PageC");
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