import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function PageA() {
  const navigation = useNavigation()
  return (
    <View>
      <Text>PageA</Text>
      <Button
      title="Page C"
      onPress={() => {
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