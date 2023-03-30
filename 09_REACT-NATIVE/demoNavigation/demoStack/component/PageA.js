import {Button , Text , View , StyleSheet , FlatList , Pressable} from "react-native";
import React from "react";


function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Home Screen</Text>
            <Button title="Go to Details" onPress={() => navigation.navigate('Details')}/>
            <FlatList data={
                [
                    {firstName: "TOTO" , lastName: "Hello"} ,
                    {firstName: "TATA" , lastName: "Hella"} ,
                    {firstName: "TITI" , lastName: "Helli"}
                ]
            } renderItem={
                ({item}) => <Pressable style={styles.press}
                    onPress={() => navigation.navigate('Contact' , {firstName: item.firstName , lastName: item.lastName})}>
                    <Text>{item.firstName}, {item.lastName}</Text>
                </Pressable>
            } keyExtractor={
                (item) => item.firstName
            }/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        alignItems: 'center' ,
        justifyContent: 'center' ,
    } ,
    press :{
        backgroundColor: 'lightblue' ,
        padding: 10 ,
        margin: 10 ,
        borderRadius: 10 ,
        borderWidth: 2 ,
    },
    text: {
        fontSize: 30 ,
    } ,
});

export default HomeScreen;
