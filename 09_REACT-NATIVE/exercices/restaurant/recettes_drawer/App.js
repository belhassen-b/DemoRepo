import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CategoriesScreen from './screens/CategoriesScreen'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealsDetailScreen from './screens/MealsDetailScreen'
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavorisScreen from './screens/FavorisScreen'
import FavoriteScreen from './screens/FavoriteScreen'



// npm i @react-navigation/drawer
// npm i react-native-gesture-handler
// npm i react-native-reanimated
// modification du chichier babel.config.js

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();



function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Categories" component={CategoriesScreen} options={{ title: 'All Categories' }} />
            <Drawer.Screen name="Favoris" component={FavoriteScreen} options={{ title: 'Mes recettes favorites' }} />
        </Drawer.Navigator>
    )

}


export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/* <Stack.Screen name="Categories" component={CategoriesScreen} options={{title : 'All Categories'}}/> */}
                <Stack.Screen name="Drawer" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="MealsOverview" component={MealsOverviewScreen} />
                <Stack.Screen name='MealDetail' component={MealsDetailScreen} options={{ title: 'About the meal' }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})