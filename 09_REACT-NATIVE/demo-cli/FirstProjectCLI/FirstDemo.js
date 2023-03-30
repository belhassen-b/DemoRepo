import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FirstDemo() {
    return (
        <View style={styles.container}>
            <Text>Mon premier composant React Native</Text>
            <Button title="Mon Bouton" />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: "red",
        flex: 1,
    }
})