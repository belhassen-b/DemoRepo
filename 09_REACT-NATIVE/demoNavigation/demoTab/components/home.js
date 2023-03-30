

import {Button , Text , View , StyleSheet , FlatList , Pressable} from "react-native";
import React from "react";


function Home   () {
  return (
      <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Home;

