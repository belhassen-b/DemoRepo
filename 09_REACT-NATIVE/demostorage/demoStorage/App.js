import {Button , StyleSheet , Text , TextInput , View} from "react-native";

import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function App() {
    const [value , setValue] = React.useState({firstName:'', lastName:''});

    // const addData = async () => {
    //     try {
    //         await AsyncStorage.setItem('key' , 'toto');
    //     } catch (e) {
    //         // saving error
    //         console.log(e);
    //
    //     }
    // }
    //
    // const getData = async () => {
    //     try {
    //         const value = await AsyncStorage.getItem('key');
    //         if (value !== null) {
    //             // value previously stored
    //         setValue((value));
    //         }
    //     } catch (e) {
    //         // error reading value
    //         console.log(e);
    //
    //     }
    // }
    // const removeData = async () => {
    //     try {
    //         await AsyncStorage.removeItem('key');
    //         setValue('');
    //
    //     } catch (e) {
    //         console.log(e);
    //         // saving error
    //     }
    // }
    const addData = () => {
        AsyncStorage.setItem('key' , JSON.stringify({firstName: value, lastName: value}));
    }
    const getData = () => {
        try {
            const value = AsyncStorage.getItem('key');
            if (value !== null) {
                // value previously stored
                setValue(JSON.parse(value));
            }
        } catch (e) {
            // error reading value
            console.log(e);
        }
    }
    const removeData = () => {
        AsyncStorage.removeItem('key');
        setValue({firstName:'', lastName:''});
    }
    return (
        <View style={styles.container}>
            <View style={styles.buttonContainer}>
                <Button title="+ Data" onPress={addData}/>
                <Button title="- Data " onPress={removeData}/>
                <Button title="Get data" onPress={getData}/>
            </View>
            <Text style={styles.text}>Nom : {value.firstName}</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setValue({...value, firstName:text})} value={value.firstName}/>
            <Text style={styles.text}>Prénom : {value.lastName}</Text>
            <TextInput style={styles.textinput} onChangeText={(text) => setValue({...value, lastName:text})} value={value.lastName}/>


            <Text style={styles.text}>Hello
                {value.firstName} {value.lastName}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: '#fff' ,
        alignItems: 'center' ,
        justifyContent: 'center' ,
    } ,
    text: {
        fontSize: 20 ,
        marginBottom: 20 ,
    } ,
    buttonContainer: {
        flexDirection: 'row' ,
        justifyContent: 'space-between' ,
        width: 200 ,
    },
    textinput: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        width: 200,
        marginBottom: 20,
    }

});

export default App;
