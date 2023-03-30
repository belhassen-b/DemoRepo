import {Button ,Text, View, StyleSheet} from "react-native";
import React from "react";

function DetailsScreen  ({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Details Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />


        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 30,
        marginBottom: 10,
    },
});

export default DetailsScreen;