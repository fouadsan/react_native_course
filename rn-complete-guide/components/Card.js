import React from "react";
import { StyleSheet, View } from "react-native";

function Card({ style, children }) {
  return <View style={{ ...styles.card, ...style }}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 }, // shadow only works on iOS
    shadowRadius: 6,
    shadowOpacity: 0.26,

    elevation: 8, // only works on Android
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
  },
});

export default Card;
