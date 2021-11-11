import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [outputText, setOutputText] =
   useState("Open up App.js to start working on your app!")

  return (
    <View style={styles.container}>
      <Text>{outputText}</Text>
      <Button onPress={() => setOutputText("new output text")} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
