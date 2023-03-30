import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Calculatrice from './component/Calculatrice'

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.titreContainer}>
                <Text style={styles.titre}>Calculator</Text>
            </View>
            <Calculatrice />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        backgroundColor : 'black',
        alignItems : 'center',
    },
    titre : {
        fontSize : 32,
        textAlign : 'left',
        color : 'white',
        paddingStart : 30,
        fontWeight : 'bold',
    },
    titreContainer : {
        height : 70,
        marginTop : 10,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
        width : '100%',
    }

})