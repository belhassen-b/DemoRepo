import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import Home from './component/Home'
import Settings from './component/Settings'
import Contact from './component/Contact'


// package necessaire navigation :
// npm install @react-navigation/native
// npm install react-native-screens react-native-safe-area-context
// npm i @react-navigation/bottom-tabs

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{tabBarIconStyle:{display : 'none'},tabBarLabelPosition: "beside-icon"}}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Setting" component={Settings}/>
            <Tab.Screen name="Contact" component={Contact}/>
            <Tab.Screen name="test" component={Home} />
            <Tab.Screen name="test2" component={Settings}/>
            <Tab.Screen name="test4" component={Contact}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})