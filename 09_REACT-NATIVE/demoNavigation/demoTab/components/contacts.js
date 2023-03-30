
import {Button , Text , View , StyleSheet , FlatList , Pressable} from "react-native";
import React from "react";


function  Contacts ()   {

    return  (
    <View style={styles.container}>
        <Text style={styles.title}>Contacts</Text>
      r
    </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default Contacts;