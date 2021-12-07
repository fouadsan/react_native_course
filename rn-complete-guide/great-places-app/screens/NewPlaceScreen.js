import React from "react";
import { View, Text, StyleSheet } from "react-native";

function NewPlaceScreen() {
  return (
    <View>
      <Text>NewPlaceScreen</Text>
    </View>
  );
}

export const screenOptions = (navData) => {
  return {
    headerTitle: "Add Place",
  };
};

const styles = StyleSheet.create({});

export default NewPlaceScreen;
