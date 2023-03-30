import { ActivityIndicator, Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { requestGet, requestPost, requestPostWithResponse } from './util/http'

export default function App() {

   // requestPost({name : "tonton" , mail : "tonton@tonton.com"})

   const [load,setLoad] = useState(true)
   const [users,setUsers] = useState([]);

   useEffect(() => {
    async function getMyData(){
      setLoad(true)
      const data = await requestGet();
      setLoad(false)
      setUsers(data)
    }
    getMyData();
   },[])

   async function PostSomething(){
    const id = await requestPostWithResponse({ name : "titi" , mail : "titi@titi.com"})
    setUsers((state) => {
      return [...state,{id : id, name : "titi" , mail : "titi@titi.com"}]
    })
   }

   if(load){
    return(
      <View>
        <ActivityIndicator size="large" color="#00ff00"></ActivityIndicator>
      </View>
    )
   }

  return (
    <View>
      <Text>Mes contacts :</Text>
      {users.map((u) => <Text key={u.id}>nom : {u.name} mail : {u.mail}</Text>)}
      <Text>Ajout d'un client :</Text>
      <Button title='Ajout de titi' onPress={PostSomething}/> 
    </View>
  )
}

const styles = StyleSheet.create({})