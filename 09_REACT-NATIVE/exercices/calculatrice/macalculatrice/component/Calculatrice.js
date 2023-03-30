import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Button from './Button';

export default function Calculatrice() {

  const [firstNumber, setFirstNumber] = useState('0');
  const [secondNumber, setSecondNumber] = useState('0');
  const [operation, setOperation] = useState('0');
  const [result, setResult] = useState('');


  function numberPress(number) {
    console.log("appuie sur un nombre : " + number)
    if (firstNumber != "0") {
      setFirstNumber(firstNumber + number)
    } else {
      setFirstNumber(number)
    }

  }

  function operationPress(operateur) {
    console.log("appuie sur un operateur : " + operateur)
    setOperation(operateur)
    setSecondNumber(firstNumber)
    setFirstNumber("")
  }

  function resultPress() {
    console.log("appuie sur un égal")
    console.log("faire l'opération de " + secondNumber + " " + operation + " " + firstNumber)
    let resultat;
    switch (operation) {
      case "+":
        resultat = parseFloat(secondNumber) + parseFloat(firstNumber)
        setFirstNumber(resultat)
        break;
      case "-":
        resultat = parseFloat(secondNumber) - parseFloat(firstNumber)
        setFirstNumber(resultat)
        break;
      case "/":
        resultat = parseFloat(secondNumber) / parseFloat(firstNumber)
        setFirstNumber(resultat)
        break;
      case "X":
        resultat = parseFloat(secondNumber) * parseFloat(firstNumber)
        setFirstNumber(resultat)
        break;
    }

  }

  function clear() {
    console.log("appuie sur clear")
    setFirstNumber("0")
  }

  return (
    <View style={styles.calculatrice}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{result}</Text>
      </View>
      <View style={styles.display}>
        <Text style={styles.displayText}>{firstNumber}</Text>
      </View>
      <View style={styles.row}>
        <Button onPress={clear} title={"AC"} />
        <Button title={"^"} ></Button>
        <Button title={"%"}></Button>
        <Button title={"/"} onPress={() => operationPress("/")}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"7"} onPress={() => numberPress("7")} isWhite />
        <Button title={"8"} onPress={() => numberPress("8")} isWhite />
        <Button title={"9"} onPress={() => numberPress("9")} isWhite />
        <Button title={"X"} onPress={() => operationPress("X")}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"4"} onPress={() => numberPress("4")} isWhite />
        <Button title={"5"} onPress={() => numberPress("5")} isWhite />
        <Button title={"6"} onPress={() => numberPress("6")} isWhite />
        <Button title={"-"} onPress={() => operationPress("-")}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"1"} onPress={() => numberPress("1")} isWhite />
        <Button title={"2"} onPress={() => numberPress("2")} isWhite />
        <Button title={"3"} onPress={() => numberPress("3")} isWhite />
        <Button title={"+"} onPress={() => operationPress("+")}></Button>
      </View>
      <View style={styles.row}>
        <Button title={"."} isWhite />
        <Button title={"0"} onPress={() => numberPress("0")} isWhite />
        <Button title={"Del"} isWhite />
        <Button title={"="} onPress={resultPress}></Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  calculatrice: {
    width: "100%",
    position :'absolute',
    bottom : 50,
  },
  row: {
    Width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
  },
  display: {

  },
  displayText: {
    fontSize: 90,
    fontWeight: "300",
    color: "grey",
    alignSelf : "flex-end",
    marginRight : 20,
  }
})