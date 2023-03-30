import React from "react";
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./component/PageA";
import DetailsScreen from "./component/PageB";
import ContactScreen from "./component/PageC";



const Stack = createStackNavigator();
function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
                <Stack.Screen name="Contact" component={ContactScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;