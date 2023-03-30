import {Settings , StyleSheet , Text , View} from "react-native";
import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/home";
import Contacts from "./components/contacts";
import Setting from "./components/settings";





const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{tabBarIconStyle: {display: 'none'}}
      }>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name = "Settings" component={Setting} />
          <Tab.Screen name = "Contact" component={Contacts} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
