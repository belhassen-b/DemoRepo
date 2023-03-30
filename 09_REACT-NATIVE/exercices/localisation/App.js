import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from '@react-native-community/geolocation'
import axios from 'axios'


// npm i @react-native-community/geolocation
// ajout de la ligne : <uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
// dans android/app/src/main/AndroidManifest.xml

export default function App() {
    const [latitude, setLatitude] = useState(null)
    const [longitude, setLongitude] = useState(null)
    const [localisationFetch,setLocalisationFetch] = useState({ ville : '' , pays : ''})
    const [localisationAxios,setLocalisationAxios] = useState({ ville : '' , pays : ''})
    const [getPosition,setGetPosition] = useState(true)

    useEffect(() => {
        Geolocation.requestAuthorization()
        Geolocation.getCurrentPosition(
            position => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            error => console.log(error),
            {enableHighAccuracy :true, timeout : 20000, maximumAge : 1000 }
        );

    },[getPosition])

    function getApiWithFetch(){
        console.log("demande API avec Fetch")
        console.log(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`)
        fetch(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`)
        .then(response => response.json())
        .then(data => setLocalisationFetch({ ville : data.LocalizedName , pays : data.Country.LocalizedName}))
        .catch(error => console.error(error))
    }

    function getApiWithAxios(){
      console.log("demande API avec Axios")
      axios.get(`http://dataservice.accuweather.com/locations/v1/cities/geoposition/search?apikey=${APIKEY}&q=${latitude}%2C${longitude}`)
      .then(response => setLocalisationAxios({ ville : response.data.LocalizedName , pays : response.data.Country.LocalizedName}))
      .catch(error => console.error(error))
    }

    function reload(){
      setGetPosition(state => !state)
    }

  return (
    <View>
      <Button title='get coord' onPress={reload}/>
      <Text>Latitude : {latitude}</Text>
      <Text>Longitude : {longitude}</Text>
      <Button title='Get localisation with Fetch' onPress={getApiWithFetch}/>
      <Text>Localisation : {localisationFetch.pays} {localisationFetch.ville}</Text>
      <Button title='Get localisation with Axios' onPress={getApiWithAxios}/>
      <Text>Localisation : {localisationAxios.pays} {localisationAxios.ville}</Text>
    </View>
  )
}

const styles = StyleSheet.create({})