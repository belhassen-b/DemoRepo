//import 'react-native-gesture-handler';
import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import PageA from './PageA'
import PageB from './PageB'
import { createStackNavigator } from '@react-navigation/stack'
import PageC from './PageC'


//npm i react-native-gesture-handler
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

function MyButton(){
  return(
    <Pressable onPress={() => {console.log("clique header")}}>
      <Text>Clique ICI</Text>
    </Pressable>
  )
}

// options={{  headerShown: false, }} // pour MyDrawer
function MyStack() {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
       <Stack.Screen name="Drawer" component={MyDrawer} />
      {/* <Stack.Screen name="Toto" component={PageA} /> */}
      <Stack.Screen name="PageC" component={PageC} options={{  headerShown: true, headerRight : MyButton }}/>
    </Stack.Navigator>
  )

}

function MyDrawer() {
  return (
    <Drawer.Navigator >
       <Drawer.Screen name="PageA" component={PageA} options={{  headerShown: false, }}/> 
     {/* <Drawer.Screen name="Toto" component={MyStack} />  */}
      <Drawer.Screen name="PageB" component={PageB} />
    </Drawer.Navigator>
  );
}


export default function App() {


  return (
    <NavigationContainer>
      {/* <MyDrawer /> */}
      <MyStack />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({})