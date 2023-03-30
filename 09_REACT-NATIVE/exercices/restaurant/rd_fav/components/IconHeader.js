import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function IconHeader({isfav, onPress}) {
    return (
        // <Pressable onPress={() => console.log("Appuie sur le bouton header")}>
             <Pressable onPress={onPress}>
            <View>
                <Text style={styles.iconHeader}>{isfav ? "+" : "-"}</Text>
            </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    iconHeader: {
        fontSize: 30,
        fontWeight: 'bold'
    }
})