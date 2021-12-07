import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

import { HeaderButton } from "../components";

function PlacesListScreen() {
  return (
    <View>
      <Text>PlacesListScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({});

export const screenOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: (
      <HeaderButton
        title="Add Place"
        iconName={Platform.OS === "android" ? "md-add" : "ios-add"}
        onPress={() => {
          navData.navigation.navigate("NewPlace");
        }}
      />
    ),
  };
};

export default PlacesListScreen;
