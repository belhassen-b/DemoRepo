import React from "react";
import {View , Text , Pressable , StyleSheet , TextInput} from "react-native";


function ContactScreen({navigation , route}) {
const firstName = route.params.firstName;
const lastName = route.params.lastName;
    return (
        <View style={{flex: 1 , justifyContent: "center" , alignItems: "center"}}>
            <Text style={styles.text}>Contact Infos</Text>
            <Text style={styles.text}>Welcome {firstName}  {lastName} </Text>
            <Text style={styles.text}>Nom:  </Text>

            <TextInput style={styles.textInput} >{firstName}</TextInput>

            <Pressable onPress={() => navigation.navigate('Details')}>
                <Text style={
                    {fontSize: 30 , color: "blue" , fontStyle: "italic"}
                }>Go Back to Page B</Text>
            </Pressable>

        </View>

    );
}

const styles = StyleSheet.create({
    text: {
        fontSize: 30 ,
        color: "red" ,
    } ,
    textInput : {
        color: "green" ,
        fontSize: 25 ,


    }
});
export default ContactScreen;