import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import PageA from './component/PageA'
import PageB from './component/PageB'
import PageC from './component/PageC'


// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/native-stack

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator initialRouteName='PageA'>
                <Stack.Screen name="PageA" component={PageA} options={{headerShown : false}}/>
                <Stack.Screen name="PageB" component={PageB} options={{title : "Ma page B"}}/>
                <Stack.Screen name="PageC" component={PageC} options={{title : "Toto's Page"}} />
            </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})