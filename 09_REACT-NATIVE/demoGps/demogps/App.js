import {Button , FlatList , StyleSheet , Text , TextInput , View} from "react-native";
import {useEffect , useState} from "react";
import Geolocation from '@react-native-community/geolocation';
import React from "react";


export default function App() {
    const [latitude , setLatitude] = useState(null);
    const [longitude , setLongitude] = useState(null);
    const [city, setCity] = useState([]);
    const [location , setLocation] = useState({});
    const [condition , setCondition] = useState({});
    const [weather , setWeather] = useState({
        forecast: {
            forecastday: [
                {
                    date: '' ,
                    day: {
                        condition: {
                            text: '' ,
                            icon: '' ,
                        } ,
                        maxtemp_c: '' ,
                        mintemp_c: '' ,
                    } ,
                } ,
            ] ,
        } ,
    });


    useEffect(() => {
            Geolocation.requestAuthorization();
            Geolocation.getCurrentPosition(
                (position) => {
                    setLatitude(position.coords.latitude);
                    setLongitude(position.coords.longitude);
                } ,
                (error) => {
                    console.log(error);
                } ,
                {enableHighAccuracy: true , timeout: 20000 , maximumAge: 1000} ,
            );
        }
        , []);

    function getInformationFromApi() {
      fetch("http://api.weatherapi.com/v1/forecast.json?key=38c4a457d0cc4a4d862173109232203&q="+ latitude +","+longitude+"&days=1&aqi=no&alerts=no")
            .then((response) => response.json())
            .then((json) => {
                // console.log(json);
                setLocation(
                    {
                        name: json.location.name ,
                        region: json.location.region ,
                        country: json.location.country ,
                        temp_c: json.current.temp_c ,
                        condition: json.current.condition ,
                    }
                );
                setCondition(
                    {
                        text: json.current.condition.text ,
                        icon: json.current.condition.icon ,
                    }
                );
                setWeather(
                    {
                        forecast: json.forecast.forecastday ,
                    }
                );
            })
    }

    function getWeatherByCity() {
        fetch(
            "http://api.weatherapi.com/v1/forecast.json?key=38c4a457d0cc4a4d862173109232203 &q="+city+"&days=1&aqi=no&alerts=no"
        )
        .then((response) => response.json())
        .then((json) => {
            // console.log(json);
    setLocation(
                {
                    name: json.location.name ,
                    region: json.location.region ,
                    country: json.location.country ,
                    temp_c: json.current.temp_c ,
                    condition: json.current.condition ,
                }
            );
            setCondition(
                {
                    text: json.current.condition.text ,
                    icon: json.current.condition.icon ,
                }
            );
            setWeather(
                {
                    forecast: json.forecast.forecastday ,
                }
            );


        })
    }


    return (
        <View style={styles.container}>
            <Text>Weather App</Text>
            <Text style={styles.text1}>Location :</Text>
            <Text style={styles.text1}>Latitude: {latitude}</Text>
            <Text style={styles.text1}>Longitude: {longitude}</Text>

<Text style={styles.hr}>---------------------------------------------------</Text>

    <Button title="Get Weather By gps" onPress={getInformationFromApi}/>
            <TextInput style={styles.textInput}  onChangeText={ (text) => setCity(text) } placeholder={"Please insert your city name"}/>
            <Button title="Get Weather By City " onPress={getWeatherByCity}/>

            <View>
            <FlatList data={
                weather.forecast
            } renderItem={
                ({item}) => {
                    return (
                        <View>
                            <Text style={styles.list}>Informations :</Text>
                            <Text style={styles.list}>Location: {location.name}</Text>
                            <Text style={styles.list}>Temperature: {location.temp_c}</Text>
                            <Text style={styles.list}>Condition: {condition.text}</Text>
                            <Text style={styles.list}> Region: {location.region} </Text>
                            <Text style={styles.list}> Country: {location.country}</Text>
                            <Text style={styles.list}>Date: {item.date}</Text>
                            <Text style={styles.list}>Condition: {item.day.condition.text}</Text>
                            <Text style={styles.list}>Max Temperature: {item.day.maxtemp_c} °</Text>
                            <Text style={styles.list}>Min Temperature: {item.day.mintemp_c} °</Text>
                        </View>
                    );
                }
            }
                      keyExtractor={(item , index) => index.toString()}
            />
          </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1 ,
        backgroundColor: 'white' ,
    alignItems: 'center' ,
    } ,
    text1: {
        fontSize: 20 ,
        color: 'black' ,
        fontStyle: 'italic' ,
    } ,
    hr: {
        marginTop: 10 ,
        marginBottom: 10 ,
       height: 1 ,
        width: '100%' ,
        backgroundColor: 'black' ,
    } ,
    textInput: {
        marginTop: 10 ,
        height: 40 ,
        marginBottom: 10 ,
        width: '70%' ,
        fontSize: 15 ,
        color: 'black' ,
        borderColor: 'black' ,
        borderWidth: 1 ,
    } ,

    list: {
        marginTop: 10 ,
        width: '100%' ,
        fontSize: 20 ,
        color: 'black' ,
        fontStyle: 'italic' ,
    } ,

});




