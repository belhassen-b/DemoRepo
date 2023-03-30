import { Button, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TestModal(props) {


    function TestCloseModal() {
        console.log("clique bouton modal")
    
    }

  return (
    <Modal visible={props.visible}>
        <View>
            <Text>Ceci est ma modal React Native</Text>
            <Button title='close Modal' onPress={props.closeModal}/>
        </View>
    </Modal>
  )
}

const styles = StyleSheet.create({})